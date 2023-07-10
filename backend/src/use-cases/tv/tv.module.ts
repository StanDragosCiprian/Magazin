import { Module } from '@nestjs/common';
import { TvService } from './tv.service';

import { TvController } from 'src/controllers/tv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tv } from 'src/core/entities/tv.entity';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [TypeOrmModule.forFeature([tv]), UsersModule],
  controllers: [TvController],
  providers: [TvService],
})
export class TvModule {}
