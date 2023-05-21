import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ticket } from "./ticket.entity";

@Entity({name:'support_employees'})
export class support {

    @PrimaryColumn()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

}