import {CanActivate, ExecutionContext, forwardRef, Inject, Injectable} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {UserService} from "../../user/service/user.service";
import {UserI} from "../../user/models/user.interface";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user: UserI = request.user;
        return roles.some((role) => user.role?.includes(role));
    }
}