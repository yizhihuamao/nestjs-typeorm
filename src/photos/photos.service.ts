import { Injectable } from '@nestjs/common';
import { CreatePhotoMetadataDto } from './dto/create-photo-metadata.dto';
import { Photo } from './entities/photo.entity';
import { PhotoMetadata } from './entities/photo-meta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoAlbumsDto } from './dto/create-photo-albums.dto';
import { Album } from './entities/album.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private readonly photosRepository: Repository<Photo>,
    @InjectRepository(PhotoMetadata) private readonly photoMetaRepository: Repository<PhotoMetadata>,
    @InjectRepository(Album) private readonly albumMetaRepository: Repository<Album>,
  ) { }

  async create(createPhotoMetadataDto: CreatePhotoMetadataDto) {
    // 实际中要用事务
    // 或者 cascade: true ? (已经配置)，只保存一次

    const metadata = new PhotoMetadata();
    metadata.height = createPhotoMetadataDto.height;
    metadata.width = createPhotoMetadataDto.width;
    metadata.compressed = createPhotoMetadataDto.compressed;
    metadata.comment = createPhotoMetadataDto.comment;
    metadata.orientation = createPhotoMetadataDto.orientation;

    const photo = new Photo();
    photo.name = createPhotoMetadataDto.name;
    photo.description = createPhotoMetadataDto.description;
    photo.filename = createPhotoMetadataDto.filename;
    photo.views = createPhotoMetadataDto.views;
    photo.isPublished = createPhotoMetadataDto.isPublished;

    photo.metadata = metadata
    return this.photosRepository.save(photo);
  }

  findAll() {
    return this.photosRepository.find({ relations: ["metadata"] })
  }

  findAllMetadata() {
    return this.photoMetaRepository.find({ relations: ["photo"] })
  }

  async createPhotoAlbum(createPhotoAlbumsDto: CreatePhotoAlbumsDto) {

    const albums = []

    for (const photoAlbum of createPhotoAlbumsDto.albums) {
      const album = new Album();
      album.name = photoAlbum.name
      albums.push(album)
      await this.albumMetaRepository.save(album)
    }

    let photo = new Photo();
    photo.name = createPhotoAlbumsDto.name;
    photo.description = createPhotoAlbumsDto.description;
    photo.filename = createPhotoAlbumsDto.filename;
    photo.views = createPhotoAlbumsDto.views;
    photo.isPublished = createPhotoAlbumsDto.isPublished;
    photo.albums = albums;
    return this.photosRepository.save(photo);
  }

  findAllphotoAlbum() {
    return this.photosRepository.find({ relations: ["albums"] })
  }

  /* findOne(id: number) {
    return this.photosRepository.findOne(id);
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    // 这段代码只是演示，实际要使用事务
    const photo = await this.findOne(id);
    photo.name = updatePhotoDto.name;
    photo.description = updatePhotoDto.description;
    photo.filename = updatePhotoDto.filename;
    photo.views = updatePhotoDto.views;
    photo.isPublished = updatePhotoDto.isPublished;
    return this.photosRepository.save(photo);
  }

  async remove(id: number) {
    // 这段代码只是演示，实际要使用事务
    const user = await this.findOne(id);
    return this.photosRepository.remove(user);
  } */
}
