import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: '*', // The frontend URL
    credentials: true, // Enable credentials (cookies, authorization headers, etc)
  };
  app.enableCors(corsOptions);
  await app.listen(4000);
  // await app.listen(process.env.PORT || 8080);
}
bootstrap();
