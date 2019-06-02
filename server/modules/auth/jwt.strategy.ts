import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../services/user.service';
import { JwtPayload } from './jwtPayload.interface';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETKEY,
    });
  }

  async validate(payload: {email: string, iat: number}) { console.log(payload)
    if (!payload.iat || Math.ceil(Date.now() / 1000) - payload.iat > 3600) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.findByEmail(payload.email);
    if (!user) { // !user.isActivated
      throw new UnauthorizedException();
    }
    return user;
  }
}
