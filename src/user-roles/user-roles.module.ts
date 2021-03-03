import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';

@Module({
  controllers: [UserRolesController],
  providers: [UserRolesService]
})
export class UserRolesModule {}
