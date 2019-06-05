import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import {Contains, IsEmail, Min, MinLength, Matches} from 'class-validator';
import * as crypto from 'crypto';

enum Role {
  ADMIN = 'Admin',
  MGER = 'Manager',
  USER = 'User'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 100 })
  @IsEmail()
  email: string;

  @Column({length: 50})
  @Matches(/((?=.*\d)(?=.*[a-z]).{6,20})/g, {message: 'Error password format'})
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column({length: 6, default: Role.USER})
  role: Role;

  @Column({default: false})
  isActivated: boolean;
}
