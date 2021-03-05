import { IsDateString } from 'class-validator';

export class CreateEventDto {
    @IsDateString()
    time: string = "2015-05-05T00:00:00.000Z";
}
