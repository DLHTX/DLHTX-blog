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
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./../controller/user/user.service");
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let AuthMiddleware = class AuthMiddleware {
    constructor(userService) {
        this.userService = userService;
    }
    use(req, res, next) {
        if (!req.headers.authorization) {
            return res.send({ code: 401, success: false, errorMsg: '没有权限访问' });
        }
        try {
            let jwtPass = jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'secretKey');
            this.userService.validateUser(jwtPass).then(res => {
                if (res) {
                    req.session.token = jwtPass;
                    next();
                }
                else {
                    return res.send({ code: 401, success: false, errorMsg: '没有权限访问' });
                }
            }).catch(err => {
                return res.send({ code: 401, success: false, errorMsg: '没有权限访问' });
            });
        }
        catch (err) {
            return res.send({ code: 401, success: false, errorMsg: 'Token已过期' });
        }
    }
};
AuthMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map