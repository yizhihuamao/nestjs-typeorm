import { Writer } from 'src/writers/entities/writer.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    articleName: string;

    @Column()
    isPublished: boolean;

    @Column()
    writerId: number;

    @ManyToOne(() => Writer, writer => writer.articles)
    writer: Writer
}
