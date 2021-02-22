import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Photo } from "./photo.entity";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Photo, photo => photo.author) // note: we will create author property in the Photo class below
    photos: Photo[];
}
