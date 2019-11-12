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
class UpdateBlogDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '博客id,必传' }),
    __metadata("design:type", Number)
], UpdateBlogDto.prototype, "blogId", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '博客标题' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '博客内容' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "body", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '博客分类' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "className", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '背景图片' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "bgImg", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '上传文件路径' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "upFileUrl", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '是否展示在首页' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "showIndex", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '是否置顶' }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "isTop", void 0);
exports.UpdateBlogDto = UpdateBlogDto;
//# sourceMappingURL=updateBlog.dto.js.map