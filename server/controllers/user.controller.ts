import { Controller, Get, Post,Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
// import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    // @UseGuards(AuthGuard)
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = id;
        return this.userService.update(userData);
    }  

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    }  
}