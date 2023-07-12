import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { PaymentsService } from 'src/use-cases/payment/payment.service';
import { PaymentRequestBody } from 'src/use-cases/payment/type/PaymentRequestBody';
import { Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  @Post()
  createPayments(
    @Res() response: Response,
    @Body() paymentRequestBody: PaymentRequestBody,
  ) {
    this.paymentService
      .createPayment(paymentRequestBody)
      .then((res) => {
        console.log('payment done successfully');
        response.status(HttpStatus.CREATED).json(res);
      })
      .catch((err) => {
        console.log('payment not done');
        response.status(HttpStatus.BAD_REQUEST).json(err);
      });
  }
}
