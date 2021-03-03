import { IsEnum } from 'class-validator';
import { Role } from "../../common/guards/role.enum";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRoleDto {
    @ApiProperty({ enum: Role })
    @IsEnum(Role)
    role: string;
}
