import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name:'invigilators'})
export class invigilator {

    @PrimaryColumn({unique:true})
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

}