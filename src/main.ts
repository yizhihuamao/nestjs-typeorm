import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet(), cookieParser());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
