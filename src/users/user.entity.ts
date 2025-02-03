import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        nullable: false,
        length: 100
    })
    firstname: string;
    
    @Column({
        type: "varchar",
        nullable: false,
        length: 100
    })
    lastname: string;
    
    @Column({
        type: "varchar",
        nullable: true,
        length: 10
    })
    gender: string;
    
    @Column({
        type: "varchar",
        nullable: false,
        length: 100,
        unique: true
    })
    email: string;
    
    @Column({
        type: "varchar",
        nullable: false,
        length: 100
    })
    password: string;
}