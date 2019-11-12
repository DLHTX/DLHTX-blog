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
class BlogClass {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '分类', example: 'switch' }),
    __metadata("design:type", String)
], BlogClass.prototype, "className", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '页数', example: '1' }),
    __metadata("design:type", Number)
], BlogClass.prototype, "page", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '每页显示', example: '6' }),
    __metadata("design:type", Number)
], BlogClass.prototype, "row", void 0);
exports.BlogClass = BlogClass;
//# sourceMappingURL=blogClass.dto.js.map