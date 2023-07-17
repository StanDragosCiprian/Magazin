import { Module } from '@nestjs/common';
import { PaymentsController } from 'src/controllers/payment.controller';
import { PaymentsService } from './payment.service';

@Module({
  providers: [PaymentsService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
