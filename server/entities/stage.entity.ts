import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Site } from "./site.entity";

@Entity()
export class Stage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stage: number;

    @Column({length: 50, default: null})
    status: Status;

    @Column({length: 50, default: null})
    fixVersion: string;

    @Column({length: 255, default: null})
    fixVersionKey: string;

    @Column({length: 255, default: null})
    qa: string;

    @Column({length: 255, default: null})
    dev: string;

    @Column({length: 255, default: null})
    notes: string;

    @Column({length: 255, default: null})
    distinguishName: string;

    @Column({length: 255, default: null})
    priotiry: string;

    @Column({type: 'tinyint', default: null})
    isHotfix: boolean;

    @Column({type: 'tinyint', default: null})
    needsQa: boolean;

    @ManyToOne(type => Site, site => site.stages)
    // @JoinColumn()
    site: Site;
}

enum Status {
  open = 'Open',
  devTesting = 'Dev Testing',
  readyForQa = 'Ready for Qa',
  qaTesting = 'QA Testing',
  problematic = 'Problematic',
  toDeploy = 'To Deploy',
  toDeployR = 'To Deploy (R)'
}

export enum Color {
  white = 'white',
  yellow = 'yellow',
  orange = 'orange',
  blue = 'blue',
  red = 'red',
  green = 'green',
  teal = 'teal'
}
