import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { UserService } from '../../services/user.service';
import { UserController } from '../../controllers/user.controller';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
        secret: process.env.SECRETKEY,
        // secretOrKeyProvider: (
        //   requestType: JwtSecretRequestType,
        //   tokenOrPayload: string | Object | Buffer,
        //   verifyOrSignOrOptions?: any
        // ) => {
        //   switch (requestType) {
        //     case JwtSecretRequestType.SIGN:
        //       // retrieve signing key dynamically
        //       return 'privateKey';
        //     case JwtSecretRequestType.VERIFY:
        //       // retrieve public key for verification dynamically
        //       return 'publicKey';
        //     default:
        //       // retrieve secret dynamically
        //       return 'secret12356789';
        //   }
        // },
    }),
    MailerModule.forRoot({
      transport: process.env.SMTPS,
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [UserController, AuthController]
})
export class AuthModule {}
