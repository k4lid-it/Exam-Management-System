import { TimeoutInfo } from "rxjs";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name:'tickets'})
export class ticket {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    room: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    seat:number;

    @Column({nullable:true})
    employee: string;

    @Column({type:'time'})
    time: string;

    @BeforeInsert()
    updateTimestamp() {
    const currentDate = new Date();
    const currentTime = currentDate.toTimeString().split(' ')[0];
    this.time = currentTime;
    }

    @Column({default:'open'})
    status: string;


    
}