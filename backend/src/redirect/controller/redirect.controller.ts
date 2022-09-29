import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {RedirectService} from "../service/redirect.service";
import {JwtAuthGuard} from "../../auth/guards/jwt-auth.guard";
import {RedirectDto} from "../models/dto/redirect.dto";
import {RolesGuard} from "../../auth/guards/roles.guard";
import {Roles} from "../../auth/roles/roles.decorator";
import {Role} from "../../auth/roles/role.enum";

@Controller('redirect')
export class RedirectController {
    constructor(private redirectService: RedirectService) {
    }

    @Get(":code")
    getUrlFromCode(@Req() req, @Param("code") code) {
        return this.redirectService.findOneByCode(code, req.ip);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    listAllRedirects() {
        return this.redirectService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":code/info")
    showInfoOfCode(@Param("code") code) {
        return this.redirectService.showCodeInfo(code);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":code")
    deleteCode(@Req() req, @Param("code") code) {
        return this.redirectService.deleteCode(code);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Post(":code")
    createCode(@Req() req, @Body() redirectDto: RedirectDto) {
        return this.redirectService.createCode(redirectDto, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(":code")
    editCode() {

    }

}
