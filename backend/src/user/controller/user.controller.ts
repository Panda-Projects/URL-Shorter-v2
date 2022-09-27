import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from '../models/dto/CreateUser.dto';
import { LoginUserDto } from '../models/dto/LoginUser.dto';
import { UserI } from '../models/user.interface';
import { UserService } from '../service/user.service';
import {I18n, I18nContext} from "nestjs-i18n";
import {Roles} from "../../auth/roles/roles.decorator";
import {Role} from "../../auth/roles/role.enum";
import {RolesGuard} from "../../auth/guards/roles.guard";

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  // Rest Call: POST http://localhost:8080/api/users/
  @Post('create')
  create(@Body() createdUserDto: CreateUserDto, @I18n() i18n: I18nContext): Observable<UserI> {
    return this.userService.create(createdUserDto, i18n);
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

  // Rest Call: GET http://localhost:8080/api/users/ 
  // Requires Valid JWT from Login Request
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() request): Observable<UserI[]> {
    return this.userService.findAll();
  }
}
