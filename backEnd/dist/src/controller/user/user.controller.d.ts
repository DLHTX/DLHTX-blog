import { GetCodeDto } from './../../dto/getCode.dto';
import { LoginDto } from './../../dto/login.dto';
import { UserService } from './user.service';
import { RegisterDto } from '../../dto/register.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(user: RegisterDto): Promise<any>;
    login(user: LoginDto): Promise<any>;
    getCode(user: GetCodeDto): Promise<any>;
}
