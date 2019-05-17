import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  siteId: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  teamId: number;
}