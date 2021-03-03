import { IsString, IsEnum, IsOptional } from 'class-validator';
import { Role } from "../../common/guards/role.enum";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @ApiProperty({ enum: Role, isArray: true })
    @IsEnum(Role, { each: true })
    @IsOptional()
    roles: Role[];
}
