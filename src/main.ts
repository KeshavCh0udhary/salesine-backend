import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: [
      'http://localhost:8080',
      'http://50.17.81.170:3000',
      'http://50.17.81.170:8080'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };
  
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
