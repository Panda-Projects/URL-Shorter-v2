import {HttpCode, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {AuthService} from 'src/auth/service/auth.service';
import {Repository} from 'typeorm';
import {CreateUserDto} from '../models/dto/CreateUser.dto';
import {LoginUserDto} from '../models/dto/LoginUser.dto';
import {UserEntity} from '../models/user.entity';
import {UserI} from '../models/user.interface';
import {Role} from "../../auth/roles/role.enum";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private authService: AuthService
    ) {}

    create(createdUserDto: CreateUserDto): Observable<UserI> {
        const userEntity = this.userRepository.create(createdUserDto);

        return this.mailExists(userEntity.email).pipe(
            switchMap((exists: boolean) => {
                if (!exists) {
                    return this.authService.hashPassword(userEntity.password).pipe(
                        switchMap((passwordHash: string) => {
                            // Overwrite the user password with the hash, to store it in the db
                            userEntity.password = passwordHash;
                            this.userRepository.count().then(value => {
                                if(value === 0) {
                                    userEntity.status = "1";
                                    userEntity.role = Role.ADMIN;
                                }
                            })
                            return from(this.userRepository.save(userEntity)).pipe(
                                map((savedUser: UserI) => {
                                    const {password, ...user} = savedUser;
                                    return user;
                                })
                            )
                        })
                    )
                } else {
                    throw new HttpException('Email already in use', HttpStatus.CONFLICT);
                }
            })
        )
    }

    login(loginUserDto: LoginUserDto): Observable<string> {
        return this.findUserByEmail(loginUserDto.email.toLowerCase()).pipe(
            switchMap((user: UserI) => {
                    if (user) {
                        if(user.status === "0") throw new HttpException("User isn't active", HttpStatus.CONFLICT)
                        return this.validatePassword(loginUserDto.password, user.password).pipe(
                            switchMap((passwordsMatches: boolean) => {
                                if (passwordsMatches) {
                                    return this.findOne(user.id).pipe(
                                        switchMap((user: UserI) => this.authService.generateJwt(user))
                                    )
                                } else {
                                    throw new HttpException('Login was not Successfully', HttpStatus.UNAUTHORIZED);
                                }
                            })
                        )
                    } else {
                        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
                    }
                }
            )
        )
    }

    findAll(): Observable<UserI[]> {
        return from(this.userRepository.find());
    }

    findOne(id: number): Observable<UserI> {
        return from(this.userRepository.findOne({where: { id: id}}));
    }

    async getUserCount() {
        return await this.userRepository.count();
    }

    findOneRepository(userId: number): Promise<UserEntity | null> {
        return this.userRepository.findOne({where: { id: userId}});
    }

    private findUserByEmail(email: string): Observable<UserI> {
        return from(this.userRepository.findOne({where: {email: email}, select: ['id', 'email', 'username','status','password'] }));
    }

    private validatePassword(password: string, storedPasswordHash: string): Observable<boolean> {
        return this.authService.comparePasswords(password, storedPasswordHash);
    }

    private mailExists(email: string): Observable<boolean> {
        if (email) {
            email = email.toLowerCase();
            return from(this.userRepository.findOne({where: {email: email}})).pipe(
                map((user: UserI) => {
                    return !!user;
                })
            )
        } else {
            return;
        }
    }

    async deleteUser(userId) {
        return this.userRepository.delete({id: userId}).catch(reason => {
            throw new HttpException("", HttpStatus.BAD_REQUEST)
        }).then(value => {
            return {
                message: "User delete success"
            }
        })
    }

    async activeUser(userId) {
        return this.findOneRepository(userId).then(user => {
            user.status = "1";
            return this.userRepository.save(user).then(() => {
                return {
                    message: "User is now active"
                }
            }).catch((error) => {
                throw new HttpException("User could not be activated", HttpStatus.CONFLICT)
            })
        })
    }
}
