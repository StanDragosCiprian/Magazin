import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothesModule } from './use-cases/clothes/clothes.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TvModule } from './use-cases/tv/tv.module';
import { UsersModule } from './use-cases/users/users.module';
import { PaymentsModule } from './use-cases/payment/Product.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ClothesModule,
    TvModule,
    UsersModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
