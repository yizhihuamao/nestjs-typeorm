import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Photo } from "./photo.entity";

@Entity()
export class Album {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Photo, photo => photo.albums)
    @JoinTable()
    photos: Photo[];
}
