import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configService = new ConfigService();
  const port = configService.get('PORT');

  app.use(
    session({
      secret: configService.get('SESSION_KEY'),
      resave: true,
      cookie: { httpOnly: true },
      saveUninitialized: false,
    }),
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.setGlobalPrefix('api/v1', { exclude: [] });

  await app.listen(port);
}
bootstrap();
