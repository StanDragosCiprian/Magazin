import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  await app.listen(3000);

  if ((module as any).hot) {
    (module as any).hot.accept();
    (module as any).hot.dispose(() => app.close());
  }
}
bootstrap();
