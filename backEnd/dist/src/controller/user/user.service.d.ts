import { GetCodeDto } from './../../dto/getCode.dto';
import { RegisterDto } from './../../dto/register.dto';
import { LoginDto } from './../../dto/login.dto';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
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
        userInfo: User;
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
}
