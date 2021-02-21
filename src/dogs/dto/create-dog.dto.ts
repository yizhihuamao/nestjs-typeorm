import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DogShops } from './dog-shops.enum';

export class CreateDogDto {
    @IsString()
    name: string;

    @ApiProperty({ enum: DogShops })
    @IsEnum(DogShops)
    dogShops: DogShops;

    age?: number;

    breed?: string;
}
