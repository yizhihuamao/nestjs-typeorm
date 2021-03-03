import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Role } from "../../common/guards/role.enum";
import { User } from '../../users/entities/user.entity'

@Entity()
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: Role,
    })
    role: Role

    @ManyToMany(() => User, user => user.roles)
    users: User[];
}
