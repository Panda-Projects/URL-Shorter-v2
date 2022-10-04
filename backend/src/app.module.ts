import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from "./user/user.module";
import {AuthModule} from "./auth/auth.module";
import {UserEntity} from "./user/models/user.entity";
import {ConfigModule} from "@nestjs/config";
import {RedirectModule} from "./redirect/redirect.module";
import {RedirectEntity} from "./redirect/models/redirect.entity";
import {RedirectClicksEntity} from "./redirect/models/redirectClicks.entity";
import {AnalyticsService} from "./analytics/service/analytics.service";
import {AnalyticsModule} from "./analytics/analytics.module";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'user',
            password: 'fred',
            database: 'testdb',
            entities: [UserEntity, RedirectEntity, RedirectClicksEntity],
            synchronize: true,
        }),
        UserModule,
        AuthModule,
        RedirectModule,
        AnalyticsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
