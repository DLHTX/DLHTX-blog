import { GitRegisterDto } from './../../dto/user/gitRegister.dto';
import { UserInfoDto } from './../../dto/user/userInfo.dto';
import { ChangeInfoDto } from './../../dto/user/changeInfo.dto';
import { GetCodeDto } from '../../dto/user/getCode.dto';
import { RegisterDto } from '../../dto/user/register.dto';
import { LoginDto } from '../../dto/user/login.dto';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validateUser(payload: any): Promise<any>;
    gitRegister(user: GitRegisterDto): Promise<{
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
        userInfo: any;
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
    sendMail(mail: any): Promise<{}>;
    changeHeadImg(param: ChangeInfoDto): Promise<{
        success: boolean;
        msg: string;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: string;
        msg?: undefined;
    }>;
    updatedUserInfo(param: UserInfoDto): Promise<{
        success: boolean;
        msg: string;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: string;
        msg?: undefined;
    }>;
}
