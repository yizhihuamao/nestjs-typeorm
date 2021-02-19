import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { WinstonModule } from 'nest-winston';
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
    }),
    CoreModule,
    WinstonModule.forRoot({}),
    ConnectionModule,
    CatsModule,
  ],
})
export class AppModule { }
