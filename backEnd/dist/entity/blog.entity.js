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
let Blog = class Blog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Blog.prototype, "blogId", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: "mediumtext", nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "body", void 0);
__decorate([
    typeorm_1.Column({ type: "int", nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Blog.prototype, "readcount", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Blog.prototype, "update_time", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Blog.prototype, "creat_time", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "className", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true, default: 1 }),
    __metadata("design:type", String)
], Blog.prototype, "showIndex", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true, default: 0 }),
    __metadata("design:type", String)
], Blog.prototype, "isTop", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "bgImg", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "upFileUrl", void 0);
Blog = __decorate([
    typeorm_1.Entity()
], Blog);
exports.Blog = Blog;
//# sourceMappingURL=blog.entity.js.map