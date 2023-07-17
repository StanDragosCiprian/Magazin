import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from '../../controllers/clothes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clothes } from 'src/core/entities/clothe.entity';
import { JwtModule } from '@nestjs/jwt';
import { CookieGuard } from 'src/auth/role.guard';
@Module({
  imports: [
    TypeOrmModule.forFeature([clothes]),
    JwtModule.register({
      secret: 'your-secret-key',
    }),
  ],
  controllers: [ClothesController],
  providers: [ClothesService, CookieGuard],
})
export class ClothesModule {}
