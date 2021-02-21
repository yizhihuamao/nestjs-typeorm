import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { PhotoMetadata } from "./photo-meta.entity";

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
}
