import { GetCodeDto } from './../dto/getCode.dto';
import { LoginDto } from './../dto/login.dto';
import { UserService } from './user.service';
import { RegisterDto } from '../dto/register.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(user: RegisterDto): Promise<{
        success: boolean;
        data: import("typeorm").UpdateResult;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: string;
        data?: undefined;
    }>;
    login(user: LoginDto): Promise<{
        success: boolean;
        data: string;
        userInfo: import("../entity/user.entity").User;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: string;
        data?: undefined;
        userInfo?: undefined;
    }>;
    getCode(user: GetCodeDto): Promise<{
        success: boolean;
        errorMsg: string;
    }>;
}
