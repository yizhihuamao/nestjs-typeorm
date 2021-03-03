import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRolesModule } from '../user-roles/user-roles.module'

@Module({
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User]), UserRolesModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }
