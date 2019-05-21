import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async  create(user: User): Promise<User> {
    const userEntity = Object.assign(new User(), user);
    return await this.userRepository.save(userEntity);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
        where: {
            email: email,
        }
    });
  }

  async findById(id: string): Promise<User> {
      return await this.userRepository.findOne({
          where: {
              id: id,
          }
      });
  }
}