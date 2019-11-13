"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo_dto_1 = require("./../../dto/user/userInfo.dto");
const changeInfo_dto_1 = require("./../../dto/user/changeInfo.dto");
const getCode_dto_1 = require("../../dto/user/getCode.dto");
const login_dto_1 = require("../../dto/user/login.dto");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const register_dto_1 = require("../../dto/user/register.dto");
let UserController = class UserController {
    constructor(userService, httpService) {
        this.userService = userService;
        this.httpService = httpService;
    }
    async register(user) {
        return await this.userService.register(user);
    }
    async login(user) {
        return await this.userService.login(user);
    }
    async getCode(user) {
        return await this.userService.getCode(user);
    }
    async changeHeadImg(user) {
        return await this.userService.changeHeadImg(user);
    }
    async updatedUserInfo(user) {
        console.log(user);
        return await this.userService.updatedUserInfo(user);
    }
    async getToken(param) {
        const requestToken = param.code;
        const ClientID = '97115b7345ed4bf40f56';
        const ClientSecret = '46785de40d1fa7950c0a736c1a758f411a540b86';
        let res = await this.httpService.request({
            method: 'post',
            url: 'http://github.com/login/oauth/access_token?' +
                `client_id=${ClientID}&` +
                `client_secret=${ClientSecret}&` +
                `code=${requestToken}`,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Content-Length': '23'
            },
        }).toPromise().then(res => {
            console.log(res);
        });
    }
    async getUser(param) {
        let gitRegister = { name: param.name + '_git', password: param.password, headImg: param.headImg };
        return await this.userService.gitRegister(gitRegister);
    }
};
__decorate([
    common_1.Post('/register'),
    swagger_1.ApiOperation({ title: '用户注册' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    common_1.Post('/login'),
    swagger_1.ApiOperation({ title: '用户登录' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    common_1.Get('/getCode'),
    swagger_1.ApiOperation({ title: '用户获取验证码' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getCode_dto_1.GetCodeDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getCode", null);
__decorate([
    common_1.Post('/changeHeadImg'),
    swagger_1.ApiOperation({ title: '更改用户头像' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changeInfo_dto_1.ChangeInfoDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeHeadImg", null);
__decorate([
    common_1.Post('/updatedUserInfo'),
    swagger_1.ApiOperation({ title: '更改用户信息' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userInfo_dto_1.UserInfoDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatedUserInfo", null);
__decorate([
    common_1.Get('/getToken'),
    swagger_1.ApiOperation({ title: '获取githubToken' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getToken", null);
__decorate([
    common_1.Get('/githubLogin'),
    swagger_1.ApiOperation({ title: '获取github用户信息' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
UserController = __decorate([
    swagger_1.ApiUseTags('用户相关api'),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService, common_1.HttpService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map