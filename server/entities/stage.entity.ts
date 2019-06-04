import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Site } from "./Site.entity";

// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
    notes: number;

    @Column({length: 255, default: null})
    distinguishName: string;

    @Column({length: 255, default: null})
    priotiry: string;
    
    @Column({type: 'tinyint', default: null})
    is_hotfix: boolean

    @Column({type: 'tinyint', default: null})
    needs_qa: boolean

    @ManyToOne(type => Site)
    @JoinColumn()
    site: Site;
}

enum Status {}
