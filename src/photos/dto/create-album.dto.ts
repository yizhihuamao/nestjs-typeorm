import { IsString } from 'class-validator';

export class CreateAlbumDto {
    @IsString()
    name: string;
}
