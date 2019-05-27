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

  async validate(payload: JwtPayload) { console.log(payload)
    const user = await this.userService.findByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
