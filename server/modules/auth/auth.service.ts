import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwtPayload.interface';
import * as crypto from 'crypto';
import { MailerService } from '@nest-modules/mailer';
import { Token, JwtDecode } from '../../entities/token.interface';

const EXPIRES_IN = 3600;
@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly mailerService: MailerService
    ) { }

    public async login(user: User): Promise<any>{
        return this.userService.findByEmail(user.email).then((userData) => {
          if (!userData) {
            return { status: 404, msg: 'User not found' };
          }
          const hash = crypto.createHmac('sha256', user.password).digest('hex');
          if (hash !== userData.password) {
            return { status: 404, msg: 'Credential error' };
          }
          const payload: JwtPayload = {id: user.id, email: user.email, role: user.role};
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: EXPIRES_IN,
             access_token: accessToken,
             id: user.id,
             status: 200
          };
        });
    }

    public async register(user: User): Promise<any> {
      const success = await this.sendActivateEmail(user).then(res => console.log(res));

      return this.userService.create(user);
    }

    public async logout(token: string): Promise<any> {
      return null;
    }
    private sendActivateEmail(user: User): Promise<any> {
      return this.mailerService
            .sendMail({
              to: user.email,
              from: 'noreply@nestjs.com',
              subject: 'Testing Nest Mailermodule with template ✔',
              template: __dirname + '/activate', // The `.pug` or `.hbs` extension is appended automatically.
              context: {  // Data to be sent to template engine.
                code: 'cf1a3f828287',
                username: user.email,
              },
            });
    }
}
