import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ticket } from "./ticket.entity";
import { student } from "./student.entity";
import { invigilator } from "./invigilator.entity";

@Entity({name:'exams'})
export class exam {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    invigilator: string;
    
    @Column()
    room: string;

    @Column()
    date: string
    

    @Column()
    time: string;
}