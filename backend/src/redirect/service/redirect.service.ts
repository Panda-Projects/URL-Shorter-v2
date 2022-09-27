import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RedirectEntity} from "../models/redirect.entity";

@Injectable()
export class RedirectService {
    constructor(
        @InjectRepository(RedirectEntity)
        private userRepository: Repository<RedirectEntity>,
    ) {}

    findOneByCode(code: string) {
        return this.userRepository.findOne({where: {code: code}}).then(value => {
            if(value === null) throw new HttpException("Code not found", HttpStatus.NOT_FOUND)
            return {
                url: value.code
            }
        })
    }

    createCode() {

    }

    deleteCode() {

    }

    editCode() {

    }

    showCodeInfo() {

    }

}
