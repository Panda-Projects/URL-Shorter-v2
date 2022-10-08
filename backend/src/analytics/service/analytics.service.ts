import {Injectable} from '@nestjs/common';
import {UserService} from "../../user/service/user.service";
import {RedirectService} from "../../redirect/service/redirect.service";

@Injectable()
export class AnalyticsService {
    constructor(
        private userService: UserService,
        private redirectService: RedirectService
    ) {
    }

    async getAnalytics() {
        const last10Clicks = await this.redirectService.getLast10Clicks();
        return {
            totaluser: await this.userService.getUserCount(),
            redirects: await this.redirectService.getRedirectCount(),
            redirectsClicks: await this.redirectService.getRedirectClicksCount(),
            redirectsClicksToday: await this.redirectService.getRedirectClicksTodayCount(),
            last10clicks: last10Clicks
        }
    }

}
