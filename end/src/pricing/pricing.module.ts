import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingController } from './pricing.controller';

@Module({
  providers: [PricingService],
  controllers: [PricingController]
})
export class PricingModule {}
