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
const blogCollect_dto_1 = require("../../dto/blog/blogCollect.dto");
const blogId_dto_1 = require("../../dto/blog/blogId.dto");
const className_dto_1 = require("../../dto/blog/className.dto");
const blogClass_dto_1 = require("../../dto/blog/blogClass.dto");
const findBlog_dto_1 = require("../../dto/blog/findBlog.dto");
const allBlog_dto_1 = require("../../dto/blog/allBlog.dto");
const blogUserName_dto_1 = require("../../dto/blog/blogUserName.dto");
const updateBlog_dto_1 = require("../../dto/blog/updateBlog.dto");
const blog_dto_1 = require("../../dto/blog/blog.dto");
const blog_service_1 = require("./blog.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    async addBlog(blog) {
        return await this.blogService.addBlog(blog);
    }
    async updateBlog(blog) {
        return await this.blogService.updateBlog(blog);
    }
    async deleteBlog(blog) {
        return await this.blogService.deleteBlog(blog);
    }
    async findBlogByUsername(blog) {
        return await this.blogService.findBlogByUsername(blog);
    }
    async findAllBlogAndCommit(param) {
        return await this.blogService.findAllBlogAndCommit(param);
    }
    async searchBlogbyTitleAndBody(param) {
        return await this.blogService.searchBlogbyTitleAndBody(param);
    }
    async findAllBlogByclassName(param) {
        return await this.blogService.findAllBlogByclassName(param);
    }
    async findBlogByBlogId(param) {
        return await this.blogService.findBlogByBlogId(param);
    }
    async findBlogClass(param) {
        return await this.blogService.findBlogClass(param);
    }
    async addBlogClass(param) {
        return await this.blogService.addBlogClass(param);
    }
    async deleteBlogClass(param) {
        return await this.blogService.deleteBlogClass(param);
    }
    async findBlogByClassName(param) {
        return await this.blogService.findBlogByClassName(param);
    }
    async addReadCount(param) {
        return await this.blogService.addReadCount(param);
    }
    async addCollect(param) {
        return await this.blogService.addCollect(param);
    }
    async cancelCollect(param) {
        return await this.blogService.cancelCollect(param);
    }
    async addFabulous(param) {
        return await this.blogService.addFabulous(param);
    }
    async cancelFabulous(param) {
        return await this.blogService.cancelFabulous(param);
    }
    async findCollectAndFab(param) {
        return await this.blogService.findCollectAndFab(param);
    }
    async findBlogCommitByBlogId(param) {
        return await this.blogService.findBlogCommitByBlogId(param);
    }
    async findFabByUsername(param) {
        return await this.blogService.findFabByUsername(param);
    }
    async findCollectByUserName(param) {
        return await this.blogService.findCollectByUserName(param);
    }
    async findNext(param) {
        return await this.blogService.findNext(param);
    }
    async findPre(param) {
        return await this.blogService.findPre(param);
    }
};
__decorate([
    common_1.Post('/addBlog'),
    swagger_1.ApiOperation({ title: '增加博客' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_dto_1.BlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addBlog", null);
__decorate([
    common_1.Post('/updateBlog'),
    swagger_1.ApiOperation({ title: '更新博客' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateBlog_dto_1.UpdateBlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "updateBlog", null);
__decorate([
    common_1.Delete('/deleteBlog'),
    swagger_1.ApiOperation({ title: '删除博客' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogId_dto_1.BlogIdDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deleteBlog", null);
__decorate([
    common_1.Get('findBlogByUsername'),
    swagger_1.ApiOperation({ title: '查找某人的博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogUserName_dto_1.BlogUserNameDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findBlogByUsername", null);
__decorate([
    common_1.Get('findAllBlogAndCommit'),
    swagger_1.ApiOperation({ title: '查找所有博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [allBlog_dto_1.AllBlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findAllBlogAndCommit", null);
__decorate([
    common_1.Get('searchBlogbyTitleAndBody'),
    swagger_1.ApiOperation({ title: '查找规定博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findBlog_dto_1.FindBlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "searchBlogbyTitleAndBody", null);
__decorate([
    common_1.Get('findAllBlogByclassName'),
    swagger_1.ApiOperation({ title: '通过分类查找博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogClass_dto_1.BlogClass]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findAllBlogByclassName", null);
__decorate([
    common_1.Get('findBlogByBlogId'),
    swagger_1.ApiOperation({ title: '通过Id查找博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogId_dto_1.BlogIdDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findBlogByBlogId", null);
__decorate([
    common_1.Get('findBlogClass'),
    swagger_1.ApiOperation({ title: '查找博客分类' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findBlogClass", null);
__decorate([
    common_1.Post('addBlogClass'),
    swagger_1.ApiOperation({ title: '增加博客分类' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [className_dto_1.ClassNameDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addBlogClass", null);
__decorate([
    common_1.Delete('deleteBlogClass'),
    swagger_1.ApiOperation({ title: '删除博客分类' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [className_dto_1.ClassNameDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deleteBlogClass", null);
__decorate([
    common_1.Get('findBlogByClassName'),
    swagger_1.ApiOperation({ title: '查找该分类的博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [className_dto_1.ClassNameDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findBlogByClassName", null);
__decorate([
    common_1.Post('addReadCount'),
    swagger_1.ApiOperation({ title: '增加该博客阅读量' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogId_dto_1.BlogIdDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addReadCount", null);
__decorate([
    common_1.Post('addCollect'),
    swagger_1.ApiOperation({ title: '添加博客收藏' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogCollect_dto_1.BlogCollectDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addCollect", null);
__decorate([
    common_1.Post('cancelCollect'),
    swagger_1.ApiOperation({ title: '取消博客收藏' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogCollect_dto_1.BlogCollectDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "cancelCollect", null);
__decorate([
    common_1.Post('addFabulous'),
    swagger_1.ApiOperation({ title: '添加博客点赞' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogCollect_dto_1.BlogCollectDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addFabulous", null);
__decorate([
    common_1.Post('cancelFabulous'),
    swagger_1.ApiOperation({ title: '取消博客点赞' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogCollect_dto_1.BlogCollectDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "cancelFabulous", null);
__decorate([
    common_1.Post('findCollectAndFab'),
    swagger_1.ApiOperation({ title: '查看有无收藏或者点赞该博客' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogCollect_dto_1.BlogCollectDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findCollectAndFab", null);
__decorate([
    common_1.Get('findBlogCommitByBlogId'),
    swagger_1.ApiOperation({ title: '查看该博客所有评论' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogId_dto_1.BlogIdDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findBlogCommitByBlogId", null);
__decorate([
    common_1.Get('findFabByUsername'),
    swagger_1.ApiOperation({ title: '查找某人点赞博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogUserName_dto_1.BlogUserNameDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findFabByUsername", null);
__decorate([
    common_1.Get('findCollectByUserName'),
    swagger_1.ApiOperation({ title: '查找某人收藏博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogUserName_dto_1.BlogUserNameDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findCollectByUserName", null);
__decorate([
    common_1.Get('findNext'),
    swagger_1.ApiOperation({ title: '查找下一篇博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogId_dto_1.BlogIdDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findNext", null);
__decorate([
    common_1.Get('findPre'),
    swagger_1.ApiOperation({ title: '查找上一篇博客' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogId_dto_1.BlogIdDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findPre", null);
BlogController = __decorate([
    swagger_1.ApiUseTags('博客相关api'),
    common_1.Controller('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map