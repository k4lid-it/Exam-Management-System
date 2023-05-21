/*import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { ticket } from "./ticket.entity";
import { student } from "./student.entity";
import { exam } from "./Exam.entity";
import { invigilator } from "./invigilator.entity";

@Entity({name:'rooms'})
export class room {
    
    @PrimaryColumn({unique:true})
    room: string;

    @Column()
    invigilatorName: string;

    @OneToMany( () => ticket, (ticket) => ticket.room)

    ticket:ticket[]

    @OneToMany( () => student, (student) => student.room)

    student:student[]

    @OneToMany (() => invigilator, (invigilator) => invigilator.room)
    invigilator:invigilator[]

    @ManyToMany(() => exam, (exam) => exam.room)

    exam: exam[]
    
}*/