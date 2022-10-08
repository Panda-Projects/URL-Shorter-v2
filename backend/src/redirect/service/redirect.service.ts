import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RedirectEntity} from "../models/redirect.entity";
import {RedirectDto} from "../models/dto/redirect.dto";
import {RedirectClicksEntity} from "../models/redirectClicks.entity";
import {UserService} from "../../user/service/user.service";

@Injectable()
export class RedirectService {
    constructor(
        @InjectRepository(RedirectEntity)
        private redirectEntityRepository: Repository<RedirectEntity>,
        @InjectRepository(RedirectClicksEntity)
        private redirectClicksEntityRepository: Repository<RedirectClicksEntity>,
        private userService: UserService
    ) {
    }

    findOneByCode(code: string, ip: string) {
        return this.redirectEntityRepository.findOne({where: {code: code}}).then(async value => {
            if (value === null) throw new HttpException("Code not found", HttpStatus.NOT_FOUND)
            const ipDB = await fetch("http://ip-api.com/json/" + ip).then(value1 => value1.json()).then(value1 => {
                if (value1.status === "fail") {
                    return {
                        lat: 0,
                        lon: 0,
                        city: "local"
                    }
                }
                return {
                    lat: value1.lat,
                    lon: value1.lon,
                    city: value1.city
                };
            })
            const redirectClicks: RedirectClicksEntity = this.redirectClicksEntityRepository.create({
                ip: ip,
                redirectId: value.id,
                ...ipDB
            });
            this.redirectClicksEntityRepository.save(redirectClicks);
            return {
                url: value.redirect_url
            }
        })
    }

    createCode(redirectDto: RedirectDto, userId: number) {
        const redirectEntity: RedirectEntity = this.redirectEntityRepository.create(redirectDto);
        redirectEntity.userId = userId;
        return this.redirectEntityRepository.save(redirectEntity).then(() => {
            return {
                message: "Code saved"
            }
        }).catch(() => {
            throw new HttpException("Code save failed", HttpStatus.BAD_REQUEST)
        });
    }

    async deleteCode(code: string) {
        return await this.redirectEntityRepository.delete({id: parseInt(code)})
            .then(() => {
                return {
                    message: "Code is deleted"
                }
            })
            .catch(() => {
                throw new HttpException("Code delete failed", HttpStatus.BAD_REQUEST)
            })
    }

    editCode() {

    }

    async showCodeInfo(code: string) {
        return await this.redirectEntityRepository.findOne({where: {code: code}}).then(value => {
            if (value !== null) {
                return value
            } else {
                throw new HttpException("Code not found", HttpStatus.NOT_FOUND)
            }
        })
    }

    findAll() {
        return this.redirectEntityRepository.find().then(value => {
            return Promise.all(value.map(async value1 => {
                const dbUser = await this.userService.findOneRepository(value1.userId);
                return {...value1, username: dbUser !== null ? dbUser.username : "Deleted"}
            }))
        });
    }

    async getRedirectCount() {
        return await this.redirectEntityRepository.count();
    }

    async getRedirectClicksCount() {
        return await this.redirectClicksEntityRepository.count();
    }

    async getRedirectClicksTodayCount() {
        return await this.redirectClicksEntityRepository.find().then(value => {
            return value.filter(value1 => {
                const clickedDate = new Date(value1.clickedAt);
                const dateNow = new Date();

                return dateNow.getDay() === clickedDate.getDay() && dateNow.getMonth() === clickedDate.getMonth() && clickedDate.getFullYear() === dateNow.getFullYear();
            }).length
        });
    }

    async getLast10Clicks() {
        return await this.redirectClicksEntityRepository.find({select: ["clickedAt", "ip", "redirectId", "lat", "lon", "city"]}).then(value => {
            const list = value.sort((a, b) => b.clickedAt.getDate() - a.clickedAt.getDate())
            if (list.length >= 10) {
                list.length = 10;
            }
            return list;
        })
    }
}
