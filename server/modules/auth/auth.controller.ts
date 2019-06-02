import { Controller, Post, Body, BadRequestException, HttpStatus, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../../entities/user.entity';
import { UserValidationPipe } from './userValidate.pipe';
import { UserService } from '../../services/user.service';
import { Token } from '../../entities/token.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export  class  AuthController {
    constructor(private  readonly  authService:  AuthService,
                private readonly userService: UserService) {}

    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }

    @Post('register')
    async register(@Body(new UserValidationPipe()) user: User): Promise<any> {
      const userData: User = await this.userService.findByEmail(user.email);
      if (userData) {
        throw new BadRequestException('Email already exists');
      }
      return this.authService.register(user);
    }

    @Get('verify')
    @UseGuards(AuthGuard('jwt'))
    async verify(@Req() req): Promise<any> { // console.log(req)
      return req.user;
    }

    // @Post('logout')
    // async logout(@Body() token: Token): Promise<any> {
    //   return this.authService.verify(token.token);
    // }

}
