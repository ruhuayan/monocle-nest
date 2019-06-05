import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Stage } from './stage.entity';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, default: null })
  name: string;

  @Column({default: null})
  teamId: number;

  @OneToMany(type => Stage, stage => stage.site)
  stages: Stage[]
}
