import {Controller, Get, HttpCode, UseGuards} from '@nestjs/common';
import {AnalyticsService} from "../service/analytics.service";
import {JwtAuthGuard} from "../../auth/guards/jwt-auth.guard";

@Controller('information')
export class AnalyticsController {
    constructor(
        private analyticsService: AnalyticsService
    ) {}

    @Get()
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    getAnalytics() {
        return this.analyticsService.getAnalytics();
    }

}
