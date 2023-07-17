import { Module } from '@nestjs/common';
import { TvService } from './tv.service';
import { TvController } from 'src/controllers/tv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tv } from 'src/core/entities/tv.entity';
import { JwtModule } from '@nestjs/jwt';
import { CookieGuard } from 'src/auth/role.guard';
@Module({
  imports: [
    TypeOrmModule.forFeature([tv]),
    JwtModule.register({
      secret: 'your-secret-key',
    }),
  ],
  controllers: [TvController],
  providers: [TvService, CookieGuard],
})
export class TvModule {}
