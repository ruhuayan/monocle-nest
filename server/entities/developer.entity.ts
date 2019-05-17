import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Developer {
 
    @PrimaryGeneratedColumn()
    distinguished_name: string;

    @Column({type: 'int', default: null})
    team_id: number;

    @Column({length: 50, default: null})
    role: Role;

    @Column({length: 50, default: null})
    position: Position;

    @Column({type: 'tinyint', default: null})
    consultant: boolean;

    @Column({length: 50, default: null})
    company: Company;

    @Column({type: 'date', default: null})
    hire_date: Date;

    @Column({type: 'tinyint', default: null})
    birth_month: number;

    @Column({type: 'int', default: null})
    birth_day: number;
    
    @Column({type: 'tinyint', default: null})
    is_active: boolean

    @Column({length: 255, default: null})
    desk: string;

    // @OneToOne(type => User)
    // @JoinColumn()
    // user: User;
}

enum Role {
    BACKEND     = 'Backend',
    FRONTEND    = 'Frontend',
    QA          = 'QA',
    NA          = 'N/A',
    DEVELOPER   = 'Developer',
}

enum Position {
    YELLOW  = 'Yellow',
    GREEN   = 'Green',
    BLUE    = 'Blue',
    RED     = 'Red',
    GREY    = 'Grey',
    ORANGE  = 'Orange'
}

enum Company {
    MONTREAL = 'xxxx Montreal',
    QUANTOX = 'Quantox',
    DISTANT = 'Distant Jobs',
    EVOLUTION = 'Evolution RM',
    ROMANIA = 'xxxx Romania',
    AXIOMA = 'Axioma',
    REMOTE = 'xxxx Remote',
    EEMPIRE = 'EEmpire'
}