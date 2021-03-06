import {
    Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn
} from "typeorm";
import { PhotoMetadata } from "./photo-meta.entity";
import { Author } from "./author.entity";
import { Album } from "./album.entity";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo, {
        cascade: true,
    })
    metadata: PhotoMetadata;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    delete_at: Date;

    @ManyToOne(type => Author, author => author.photos)
    author: Author;

    @ManyToMany(type => Album, album => album.photos)
    albums: Album[];
}
