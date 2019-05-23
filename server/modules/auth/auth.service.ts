import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwtPayload.interface';

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
          
          const payload: JwtPayload = {id: user.id, email: user.email, loginAt: new Date()};
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             payload,
             status: 200
          };
        });
    }

    public async register(user: User): Promise<any>{
        return this.userService.create(user)
    } 
}
