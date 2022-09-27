import {forwardRef, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {JwtAuthGuard} from './guards/jwt-auth.guard';
import {AuthService} from './service/auth.service';
import {JwtStrategy} from './strategies/jwt.strategy';
import {UserModule} from "../user/user.module";
import {ExtractJwt} from "passport-jwt";

@Module({
    imports: [
        forwardRef(() => UserModule),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>  {
                return {
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {expiresIn: '10000s'},
                    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                }
            }
        })
    ],
    providers: [AuthService, JwtStrategy, JwtAuthGuard],
    exports: [AuthService]
})
export class AuthModule {
}
