import { Column,  Entity,  PrimaryGeneratedColumn } from "typeorm";


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