import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from '../services/User.service';
import { User } from '../entities/User.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }

    @Post()
    async create(@Body() userData: User): Promise<User> {
      return this.userService.create(userData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        return this.userService.update(userData);
    }  

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    }  
}