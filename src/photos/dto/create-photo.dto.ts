import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePhotoDto {
    @IsNumber()
    id: number;

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
}
