import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'src/db/dbModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await connect();
  await app.listen(3000);
}
bootstrap();
