import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Photo } from "./photo.entity";

@Entity()
export class PhotoMetadata {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    height: number;

    @Column()
    width: number;

    @Column({ nullable: true })
    orientation: string;

    @Column({ nullable: true })
    compressed: boolean;

    @Column({ nullable: true })
    comment: string;

    @OneToOne(type => Photo, photo => photo.metadata)
    // which indicates that this side of the relationship will own the relationship.
    @JoinColumn()
    photo: Photo;
}
