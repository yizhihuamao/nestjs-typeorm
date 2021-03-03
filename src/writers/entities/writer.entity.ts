import { Article } from 'src/articles/entities/article.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Writer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    isAdmin: boolean;

    @OneToMany(() => Article, article => article.writer)
    articles: Article[]
}
