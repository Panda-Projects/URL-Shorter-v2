import { Module } from '@nestjs/common';
import { AnalyticsController } from './controller/analytics.controller';
import { AnalyticsService } from './service/analytics.service';
import {UserModule} from "../user/user.module";
import {RedirectModule} from "../redirect/redirect.module";

@Module({
  imports: [
    RedirectModule,
    UserModule
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService]
})
export class AnalyticsModule {}
