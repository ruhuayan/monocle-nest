import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {JwtModule } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { UserService } from '../../services/user.service';
import { UserController } from '../../controllers/user.controller';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
// import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
  ],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [UserController, AuthController]
})
export class AuthModule {}
