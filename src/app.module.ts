import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { SellingModule } from './selling/selling.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SellingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
