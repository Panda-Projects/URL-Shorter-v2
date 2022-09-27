import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  @Get()
  isUp(): Object {
    return {
      "message": "API is up"
    };
  }
}
