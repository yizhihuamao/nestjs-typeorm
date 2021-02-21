import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { PhotoMetadata } from './entities/photo-meta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, PhotoMetadata])],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule { }
