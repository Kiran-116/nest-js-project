import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // This will remove any extra fields that are not defined in the DTO
    forbidNonWhitelisted: true, // This will throw an error if any extra fields are present in the DTO
    transform: true,            // This will transform the incoming data to the DTO type
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
