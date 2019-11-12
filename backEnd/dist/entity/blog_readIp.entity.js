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
let Blog_readIp = class Blog_readIp {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Blog_readIp.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "int" }),
    __metadata("design:type", Number)
], Blog_readIp.prototype, "blogId", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", String)
], Blog_readIp.prototype, "ip", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Blog_readIp.prototype, "creat_time", void 0);
Blog_readIp = __decorate([
    typeorm_1.Entity()
], Blog_readIp);
exports.Blog_readIp = Blog_readIp;
//# sourceMappingURL=blog_readIp.entity.js.map