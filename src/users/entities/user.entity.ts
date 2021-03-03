import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { UserRole } from '../../user-roles/entities/user-role.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    username: string;

    @Column({ select: false })
    password?: string;

    @ManyToMany(() => UserRole, userRole => userRole.users, { cascade: true })
    roles: UserRole[];

    /* @Column({ nullable: true })
    age: string;

    @Column({ default: true })
    isActive: boolean; */
}
