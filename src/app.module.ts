import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
    }),
    CoreModule,
    CatsModule,
    WinstonModule.forRoot({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({ filename: 'info.log', level: 'info' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    }),
  ],
})
export class AppModule { }
