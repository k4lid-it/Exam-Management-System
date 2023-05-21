import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name:'admins'})
export class Administrator {

    @PrimaryColumn({unique:true})
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

}