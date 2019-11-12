import { UserService } from './../controller/user/user.service';
import { NestMiddleware } from '@nestjs/common';
export declare class AuthMiddleware implements NestMiddleware {
    private userService;
    constructor(userService: UserService);
    use(req: any, res: any, next: () => void): any;
}
