import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {RedirectService} from "../service/redirect.service";
import {JwtAuthGuard} from "../../auth/guards/jwt-auth.guard";

@Controller('redirect')
export class RedirectController {
    constructor(private redirectService: RedirectService) {
    }

    @Get(":code")
    getUrlFromCode(@Req() req, @Param() parm) {
        return this.redirectService.findOneByCode(parm);
    }

    @UseGuards(JwtAuthGuard)
    @Get(":code/info")
    showInfoOfCode() {

    }

    @UseGuards(JwtAuthGuard)
    @Delete(":code")
    deleteCode() {

    }

    @UseGuards(JwtAuthGuard)
    @Post(":code")
    createCode() {

    }

    @UseGuards(JwtAuthGuard)
    @Put(":code")
    editCode() {

    }

}
