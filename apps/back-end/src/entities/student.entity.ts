import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'students'})
export class student {
    
    @PrimaryGeneratedColumn()
    ID:number;

    @Column()
    studentID: string;

    @Column()
    name: string;

    @Column({default: 'CCI'}) 
    college: string;

    @Column()
    subject: string;

    @Column()
    CRN:string;

    @Column()
    course:string

    @Column()
    time:string; 

    @Column()
    room: string;

    @Column()
    seat: string;

    @Column({default: 'Absent'})
    attendance: string;

    @Column({nullable: true})
    report: string;


}