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
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, default: 'http://dlhtx.zicp.vip:3000/file/randomAvatar' }),
    __metadata("design:type", String)
], User.prototype, "headImg", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "nickName", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "info", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "sex", void 0);
__decorate([
    typeorm_1.Column({ type: "float", nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "num", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "mail", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], User.prototype, "codeTime", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], User.prototype, "creatTime", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map