import { Module, HttpModule } from '@nestjs/common';
import { SellingService } from './selling.service';
import { SellingController } from './selling.controller';
@Module({
  imports: [HttpModule],
  exports: [SellingService],
  controllers: [SellingController],
  providers: [SellingService],
})
export class SellingModule {}
