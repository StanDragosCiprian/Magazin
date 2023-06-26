import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothesModule } from './clothes/clothes.module';
//import { Clothe } from './clothes/entities/clothe.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', //127.0.0.1
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'MagazinDb',
      entities: [],
      synchronize: true,
    }),
    ClothesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
