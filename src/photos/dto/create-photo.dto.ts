import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePhotoDto {
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
