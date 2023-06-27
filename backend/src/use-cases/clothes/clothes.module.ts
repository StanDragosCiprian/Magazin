import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from '../../controllers/clothes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clothes } from 'src/core/entities/clothe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([clothes])],
  controllers: [ClothesController],
  providers: [ClothesService],
})
export class ClothesModule {}
