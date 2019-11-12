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
class ReviewCommitDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '评论id', example: '171' }),
    __metadata("design:type", Number)
], ReviewCommitDto.prototype, "commitId", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '回复内容', example: '测试回复内容' }),
    __metadata("design:type", Number)
], ReviewCommitDto.prototype, "commitBody", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '被评论者', example: 'dlhtx' }),
    __metadata("design:type", String)
], ReviewCommitDto.prototype, "toUser", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '评论者', example: 'veblen' }),
    __metadata("design:type", String)
], ReviewCommitDto.prototype, "fromUser", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '评论者的头像', example: '' }),
    __metadata("design:type", String)
], ReviewCommitDto.prototype, "fromUserImg", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '当前博客url', example: 'http://dlhtx.zicp.vip:9090' }),
    __metadata("design:type", String)
], ReviewCommitDto.prototype, "href", void 0);
exports.ReviewCommitDto = ReviewCommitDto;
//# sourceMappingURL=reviewCommit.dto.js.map