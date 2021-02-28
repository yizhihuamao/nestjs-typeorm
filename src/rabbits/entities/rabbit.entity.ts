import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Rabbit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    age: string;

    @Column({ nullable: true })
    owner: string;

    @Column({ nullable: true })
    gender: string;
}
