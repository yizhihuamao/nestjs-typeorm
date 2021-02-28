import { IsString } from 'class-validator';

export class CreateRabbitDto {
    @IsString()
    name: string;
}
