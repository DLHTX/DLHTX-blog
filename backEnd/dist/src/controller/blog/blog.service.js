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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("../../entity/blog.entity");
const typeorm_2 = require("typeorm");
let BlogService = class BlogService {
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
    }
    async addBlog(blog) {
        try {
            let res = await this.blogRepository.save({
                userName: blog.name,
                title: blog.title,
                body: blog.body,
                className: blog.className,
                creat_time: new Date(),
                update_time: new Date(),
                bgImg: blog.bgImg,
                upFileUrl: blog.upFileUrl
            });
            return { success: true, data: res };
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async updateBlog(blog) {
        try {
            let res = await this.blogRepository.update({
                blogId: blog.blogId
            }, {
                userName: blog.name,
                title: blog.title,
                body: blog.body,
                className: blog.className,
                creat_time: new Date(),
                update_time: new Date(),
                bgImg: blog.bgImg,
                upFileUrl: blog.upFileUrl
            });
            return { success: true, data: res };
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
};
BlogService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(blog_entity_1.Blog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map