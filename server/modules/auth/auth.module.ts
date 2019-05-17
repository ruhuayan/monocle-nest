import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {JwtModule } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { UserService } from '../../services/user.service';
import { UserController } from '../../controllers/user.controller';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
  ],
  providers: [AuthService, UserService],
  controllers: [UserController, AuthController]
})
export class AuthModule {}
