import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSecurity } from './setup/security';
import { setupSwagger } from './setup/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  setupSecurity(app);
  setupSwagger(app);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}
bootstrap();
