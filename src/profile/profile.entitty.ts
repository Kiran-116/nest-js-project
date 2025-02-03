import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        nullable: true,
        length: 100
    })
    firstname: string;
    
    @Column({
        type: "varchar",
        nullable: true,
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
        type: "timestamp",
        nullable: true
    })
    dateOfBirth: Date;

    @Column({
        type: "text",
        nullable: true
    })
    bio: string;

    @Column({
        type: "text",
        nullable: true
    })
    profileImage: string;

}