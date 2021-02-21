import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateConsumerDto {
    @IsString({
        message: 'firstName必填且为字符串',
    })
    firstName: string;

    @IsOptional()
    @IsString({
        message: 'lastName为字符串',
    })
    lastName?: string;

    @Min(18)
    @Max(100)
    @IsNumber({}, {
        message: 'age必填且为数字'
    })
    age: number;
}
