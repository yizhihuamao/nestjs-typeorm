import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { WinstonModule } from 'nest-winston';
import { ConnectionModule } from './connection/connection.module';
import { UsersModule } from './users/users.module';
import { DogsModule } from './dogs/dogs.module';
import { ConsumersModule } from './consumers/consumers.module';
import { PhotosModule } from './photos/photos.module';
import { CategoriesModule } from './categories/categories.module';
import { RabbitsModule } from './rabbits/rabbits.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UserRolesModule } from './user-roles/user-roles.module';
import { WritersModule } from './writers/writers.module';
import { ArticlesModule } from './articles/articles.module';
import { CaslModule } from './casl/casl.module';
// import { GiraffesModule } from './giraffes/giraffes.module';
// import { EventsModule } from './events/events.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`
        : '.env',
    }),
    CoreModule,
    WinstonModule.forRoot({}),
    ConnectionModule,
    // CatsModule,
    UsersModule,
    AuthModule,
    UserRolesModule,
    WritersModule,
    ArticlesModule,
    CaslModule,
    // GiraffesModule,
    // EventsModule,
    // DogsModule,
    // ConsumersModule,
    // PhotosModule,
    // CategoriesModule,
    // RabbitsModule,
  ],
})
export class AppModule {}
