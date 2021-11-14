import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIPrefix } from './constant/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(APIPrefix.Version);
  const port = Number(process.env.PORT) || 3000;
  await app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
bootstrap();
