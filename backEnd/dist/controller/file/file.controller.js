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
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("../../config");
const file_service_1 = require("./file.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
const path_1 = require("path");
let path = require('path');
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async upImg(file, body) {
        console.log(file);
        console.log(body);
        var time = new Date().getTime();
        const writeImage = fs_1.createWriteStream(path_1.join(__dirname, '..', '../../staticDir/img', `${time}*${file.originalname}`));
        writeImage.write(file.buffer);
        return {
            success: true,
            data: config_1.config.baseImgUrl + `${time}*${file.originalname}`,
            msg: '上传成功'
        };
    }
    async upload(file, body) {
        var time = new Date().getTime();
        const writeImage = fs_1.createWriteStream(path_1.join(__dirname, '..', '../../staticDir/uploads', `${time}*${file.originalname}`));
        writeImage.write(file.buffer);
        return {
            success: true,
            data: config_1.config.baseUploadUrl + `${time}*${file.originalname}`,
            msg: '上传成功'
        };
    }
    async avatar(res) {
        let random = Math.floor(Math.random() * 100 + 5);
        res.sendFile(path.resolve(__dirname, '../../../staticDir/avatar') + `/avatar (${random}).jpg`);
    }
    async randomBg(res) {
        let random = Math.floor(Math.random() * 1000 + 32);
        res.sendFile(path.resolve(__dirname, '../../../staticDir/randomBg') + `/bg (${random}).jpg`);
    }
};
__decorate([
    common_1.Post('upImg'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "upImg", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "upload", null);
__decorate([
    common_1.Get('randomAvatar'),
    __param(0, common_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "avatar", null);
__decorate([
    common_1.Get('randomBg'),
    __param(0, common_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "randomBg", null);
FileController = __decorate([
    swagger_1.ApiUseTags('文件相关api'),
    common_1.Controller('file'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map