import { Module } from '@nestjs/common';
import { RedirectService } from './service/redirect.service';
import { RedirectController } from './controller/redirect.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RedirectEntity} from "./models/redirect.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([RedirectEntity]),
  ],
  providers: [RedirectService],
  controllers: [RedirectController]
})
export class RedirectModule {}
