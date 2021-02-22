import { IsString, IsNumber, IsBoolean, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum Orientation {
    Portrait = 'Portrait',
    Horizonal = 'Horizonal'
}

export class CreateMetaDataDto {
    @IsNumber()
    height: number;

    @IsNumber()
    width: number;

    @ApiProperty({ enum: Orientation })
    @IsEnum(Orientation)
    orientation: Orientation;

    @IsBoolean()
    compressed: boolean;

    @IsString()
    comment: string;
}
