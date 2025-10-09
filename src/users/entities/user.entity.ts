import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text',{
        unique: true,
    })
    email: string

    @Column('text')
    password: string

    @Column('text')
    fullName: string

    @Column('text',{
        array: true,
        default: []
    })
    roles: string[]

    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.email = this.email.toLocaleLowerCase().trim()
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate(){
        this.checkFieldsBeforeInsert()   
    }
}
