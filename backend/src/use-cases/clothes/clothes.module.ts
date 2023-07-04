import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from '../../controllers/clothes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clothes } from 'src/core/entities/clothe.entity';
import { UsersModule } from '../users/users.module';
import { Users } from 'src/core/entities/users.entity';
@Module({
  imports: [TypeOrmModule.forFeature([clothes]), UsersModule],
  controllers: [ClothesController],
  providers: [
    ClothesService,
    {
      provide: 'UsersRepository',
      useValue: Users,
    },
  ],
})
export class ClothesModule {}
