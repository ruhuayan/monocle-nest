import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  siteId: number;

  @Column({ length: 255, default: null })
  name: string;

  @Column({default: null})
  teamId: number;
}