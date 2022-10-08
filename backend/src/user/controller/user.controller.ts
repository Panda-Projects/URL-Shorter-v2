import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Req,
    UseGuards
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtAuthGuard} from 'src/auth/guards/jwt-auth.guard';
import {CreateUserDto} from '../models/dto/CreateUser.dto';
import {LoginUserDto} from '../models/dto/LoginUser.dto';
import {UserI} from '../models/user.interface';
import {UserService} from '../service/user.service';
import {RolesGuard} from "../../auth/guards/roles.guard";
import {Role} from "../../auth/roles/role.enum";
import {Roles} from "../../auth/roles/roles.decorator";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }

    // Rest Call: POST http://localhost:8080/api/users/
    @Post('create')
    @HttpCode(201)
    async create(@Body() createdUserDto: CreateUserDto): Promise<Observable<Object>> {
        return this.userService.create(createdUserDto).pipe();
    }

    // Rest Call: POST http://localhost:8080/api/users/login
    @Post('login')
    @HttpCode(200)
    login(@Body() loginUserDto: LoginUserDto): Observable<Object> {
        return this.userService.login(loginUserDto).pipe(
            map((jwt: string) => {
                return {
                    access_token: jwt,
                    token_type: 'JWT',
                    expires_in: 10000
                }
            })
        );
    }

    @Delete(':userId')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @HttpCode(200)
    @Roles(Role.ADMIN)
    async deleteUser(@Req() req, @Param("userId") userId) {
        if (req.user.id == userId) throw new HttpException("You can't delete your self", HttpStatus.BAD_REQUEST)
        return await this.userService.deleteUser(userId);
    }

    @Post("active/:userId")
    @UseGuards(JwtAuthGuard, RolesGuard)
    @HttpCode(200)
    @Roles(Role.ADMIN)
    async activeUser(@Param("userId") userId) {
        return await this.userService.activeUser(userId);
    }

    @Get('validation')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async validationJWT(@Req() req) {
        const userDatabase = await this.userService.findOneRepository(req.user.id).then(value => value);
        if (userDatabase === null) throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        return {
            message: "JWT is valid",
            role: await this.userService.findOneRepository(req.user.id).then(value => value.role)
        }
    }

    // Rest Call: GET http://localhost:8080/api/users/
    // Requires Valid JWT from Login Request
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Get()
    findAll(@Req() request): Observable<UserI[]> {
        return this.userService.findAll();
    }
}
