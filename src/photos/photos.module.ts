import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { PhotoMetadata } from './entities/photo-meta.entity';
import { Author } from './entities/author.entity';
import { Album } from './entities/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, PhotoMetadata, Author, Album])],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule { }
