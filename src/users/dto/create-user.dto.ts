import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsOptional()
    @IsNumber({}, { each: true })
    roleIds: number[];
}
