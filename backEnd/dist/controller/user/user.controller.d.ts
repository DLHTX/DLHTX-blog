import { UserInfoDto } from './../../dto/user/userInfo.dto';
import { ChangeInfoDto } from './../../dto/user/changeInfo.dto';
import { GetCodeDto } from '../../dto/user/getCode.dto';
import { LoginDto } from '../../dto/user/login.dto';
import { HttpService } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from '../../dto/user/register.dto';
export declare class UserController {
    private readonly userService;
    private readonly httpService;
    constructor(userService: UserService, httpService: HttpService);
    register(user: RegisterDto): Promise<any>;
    login(user: LoginDto): Promise<any>;
    getCode(user: GetCodeDto): Promise<any>;
    changeHeadImg(user: ChangeInfoDto): Promise<any>;
    updatedUserInfo(user: UserInfoDto): Promise<any>;
    getToken(param: {
        code: string;
    }): Promise<void>;
    getUser(param: {
        name: string;
        password: string;
        headImg: string;
    }): Promise<{
        success: boolean;
        data: string;
        userInfo: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: string;
        data?: undefined;
        userInfo?: undefined;
    }>;
}
