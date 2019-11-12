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
const mailClass_config_1 = require("./../config/mailClass.config");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_3 = require("typeorm");
const mail_config_1 = require("../config/mail.config");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(user) {
        try {
            let userList = await this.userRepository.findOne({ where: [{ name: user.name, password: typeorm_3.Not('null') }] });
            console.log(userList);
            if (!userList) {
                let currentUser = await this.userRepository.findOne({ name: user.name });
                if (currentUser.code === user.code && currentUser.codeTime.getTime() - new Date().getTime() < 600000) {
                    let res = await this.userRepository.update({ name: user.name }, { code: '', password: user.password });
                    console.log(res);
                    if (res) {
                        return { success: true, data: res };
                    }
                }
                else {
                    return { success: false, errorMsg: '验证码错误或者过期' };
                }
            }
            else {
                return { success: false, errorMsg: '该用户已被注册' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: '未知错误' };
        }
    }
    async login(user) {
        try {
            let userParam = await this.userRepository.findOne({ where: [{ name: user.name }, { mail: user.name }] });
            console.log(userParam);
            if (userParam) {
                if (userParam.password == user.password) {
                    return {
                        success: true,
                        data: '登录成功',
                        userInfo: userParam
                    };
                }
                else {
                    return { success: false, errorMsg: '用户名或密码错误' };
                }
            }
            else {
                return { success: false, errorMsg: '该用户未注册' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: '未知错误' };
        }
    }
    async getCode(user) {
        console.log(user);
        let code = "";
        for (var i = 0; i < 6; i++) {
            code += Math.floor(Math.random() * 10);
        }
        let mail = new mailClass_config_1.MailClass(code, user.name, user.mail);
        console.log(mail);
        try {
            let userParam = await this.userRepository.findOne({ where: [{ name: user.name }] });
            if (userParam) {
                if (userParam.password) {
                    return { success: false, errorMsg: '该用户或邮箱已注册' };
                }
                else {
                    let res = await this.userRepository.update({ name: user.name }, { mail: user.mail, code, codeTime: new Date() });
                    if (res) {
                        let mailres = await this.sendMail(mail);
                        if (mailres) {
                            return { success: true, errorMsg: '邮件发送成功' };
                        }
                        else {
                            return { success: false, errorMsg: '邮件发送失败' };
                        }
                    }
                }
            }
            else {
                let res = await this.userRepository.save({ name: user.name, mail: user.mail, code, codeTime: new Date() });
                if (res) {
                    let mailres = await this.sendMail(mail);
                    if (mailres) {
                        return { success: true, errorMsg: '邮件发送成功' };
                    }
                    else {
                        return { success: false, errorMsg: '邮件发送失败' };
                    }
                }
            }
        }
        catch (err) {
            return { success: false, errorMsg: '未知错误' };
        }
    }
    sendMail(mail) {
        return new Promise((resolve, reject) => {
            mail_config_1.default(mail.mailCode).then(res => {
                resolve(res);
            }).catch(err => { reject(err); });
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map