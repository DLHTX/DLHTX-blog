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
const swagger_1 = require("@nestjs/swagger");
class AddCommitDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '评论人', example: 'dlhtx' }),
    __metadata("design:type", String)
], AddCommitDto.prototype, "commitName", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '博客id', example: '' }),
    __metadata("design:type", Number)
], AddCommitDto.prototype, "blogId", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '评论内容', example: '' }),
    __metadata("design:type", String)
], AddCommitDto.prototype, "commitBody", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '头像', example: '' }),
    __metadata("design:type", String)
], AddCommitDto.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '博客作者邮箱', example: '' }),
    __metadata("design:type", String)
], AddCommitDto.prototype, "mail", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '博客地址', example: '' }),
    __metadata("design:type", String)
], AddCommitDto.prototype, "href", void 0);
exports.AddCommitDto = AddCommitDto;
//# sourceMappingURL=addCommit.dto.js.map