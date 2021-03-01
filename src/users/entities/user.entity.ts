import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    username: string;

    @Column({ select: false })
    password?: string;

    @Column({ nullable: true })
    age: string;

    @Column({ default: true })
    isActive: boolean;
}
