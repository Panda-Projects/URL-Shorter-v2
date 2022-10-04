import { Module } from '@nestjs/common';
import { RedirectService } from './service/redirect.service';
import { RedirectController } from './controller/redirect.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RedirectEntity} from "./models/redirect.entity";
import {UserModule} from "../user/user.module";
import {RedirectClicksEntity} from "./models/redirectClicks.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([RedirectEntity, RedirectClicksEntity]),
    UserModule
  ],
  providers: [RedirectService],
  controllers: [RedirectController],
  exports: [RedirectService]
})
export class RedirectModule {}
