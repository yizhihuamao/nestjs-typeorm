import { IsString, IsDateString } from 'class-validator';

export class CreateClickedLinkEventDto {
    @IsDateString()
    time: string = "2015-05-05T00:00:00.000Z";

    @IsString()
    url: string;
}
