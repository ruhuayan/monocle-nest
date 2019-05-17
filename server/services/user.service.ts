import { Injectable } from '@nestjs/common';
import { User } from '../entities/User.entity';
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
    return await this.userRepository.save(user);
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

  async findById(id: number): Promise<User> {
      return await this.userRepository.findOne({
          where: {
              id: id,
          }
      });
  }
}