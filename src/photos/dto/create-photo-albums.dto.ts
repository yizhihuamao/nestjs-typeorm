import { IsString, IsNumber, IsBoolean, ValidateNested, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAlbumDto } from "./create-album.dto";
import { Type } from 'class-transformer';

export class CreatePhotoAlbumsDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    filename: string;

    @IsNumber()
    views: number;

    @IsBoolean()
    isPublished: boolean;

    //album
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAlbumDto)
    albums: CreateAlbumDto[]
}
