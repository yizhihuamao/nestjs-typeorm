import { IsNumberString } from 'class-validator';

export class DeleteCatDto {
    @IsNumberString()
    id: number;
}
