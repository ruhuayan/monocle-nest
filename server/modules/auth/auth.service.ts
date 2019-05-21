import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    public async login(user: User): Promise<any>{
        return this.userService.findByEmail(user.email).then((userData)=>{
          if(!userData){
            return { status: 404, msg: 'User not found' };
          }
          let payload = `${userData.id}`;
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             user_id: payload,
             status: 200
          };
        });
    }

    public async register(user: User): Promise<any>{
        return this.userService.create(user)
    } 
}
