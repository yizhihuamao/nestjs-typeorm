import { IsString, IsNumber, IsBoolean, IsEnum, IsOptional } from 'class-validator';
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
    @IsOptional()
    orientation?: Orientation;

    @IsBoolean()
    @IsOptional()
    compressed?: boolean;

    @IsString()
    @IsOptional()
    comment?: string;
}
