import { Module } from '@nestjs/common';
import { MyLogger } from './my-logger/my-logger.service';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule { }
