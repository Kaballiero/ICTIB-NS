import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ default: false })
    isAdmin: boolean;

    @Column({ default: false })
    isAdminAssistant: boolean;

    @Column({ default: false })
    couldBeTutor: boolean;

    @Column({ default: false })
    isDeleted: boolean;
}