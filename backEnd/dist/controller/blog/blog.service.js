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
const blog_class_entity_1 = require("../../entity/blog_class.entity");
const typeorm_2 = require("typeorm");
let BlogService = class BlogService {
    constructor(blogRepository, blogClassRepository) {
        this.blogRepository = blogRepository;
        this.blogClassRepository = blogClassRepository;
    }
    async authBlogUser(payload) {
        return new Promise((resolve, reject) => {
            this.blogRepository.findOne({ where: [{ blogId: payload.blogId }] }).then(blog => {
                if (blog.userName == payload.name) {
                    resolve(true);
                }
                else {
                    reject(false);
                }
            }).catch(err => {
                reject(false);
            });
        });
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
                upFileUrl: blog.upFileUrl,
                showIndex: blog.showIndex,
                isTop: blog.isTop,
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
                title: blog.title,
                body: blog.body,
                className: blog.className,
                creat_time: new Date(),
                update_time: new Date(),
                bgImg: blog.bgImg,
                upFileUrl: blog.upFileUrl,
                showIndex: blog.showIndex,
                isTop: blog.isTop
            });
            return { success: true, data: res };
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async deleteBlog(blog) {
        console.log(blog.blogId);
        try {
            let res = await this.blogRepository.query(`DELETE FROM blog WHERE blogId = ${blog.blogId}`);
            if (res.affectedRows == 1) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '删除失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findBlogByUsername(param) {
        try {
            let res = await this.blogRepository.query(`select blog.* , (select COUNT(blogId) from blog_commit where blog_commit.blogId = blog.blogId) as reviewsCount , (select COUNT(blogId) from blog_fabulous where blog_fabulous.blogId = blog.blogId) as fabulousCount from blog WHERE userName = '${param.userName}' ORDER BY isTop DESC , creat_time DESC`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findAllBlogAndCommit(param) {
        let row = param.row;
        let page = (param.page - 1) * row;
        try {
            let res = await this.blogRepository.query(`select blog.* , (select COUNT(blogId) from blog_commit where blog_commit.blogId = blog.blogId) as reviewsCount , (select COUNT(blogId) from blog_fabulous where blog_fabulous.blogId = blog.blogId) as fabulousCount from blog where blog.showIndex = 1 ORDER BY isTop DESC , creat_time DESC LIMIT ${page},${row}`);
            if (res) {
                let res2 = await this.blogRepository.query(`SELECT COUNT(blogId) from blog where showIndex = 1`);
                return { success: true, data: res, total: Number(res2[0]['COUNT(blogId)']) };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async searchBlogbyTitleAndBody(param) {
        let row = param.row;
        let page = (param.page - 1) * row;
        try {
            let res = await this.blogRepository.query(`select blog.* , (select COUNT(blogId) from blog_commit where blog_commit.blogId = blog.blogId) as reviewsCount , (select COUNT(blogId) from blog_fabulous where blog_fabulous.blogId = blog.blogId) as fabulousCount from blog where blog.showIndex = 1 and blog.title like "%${param.text}%" or blog.body like  "%${param.text}%" or blog.className like "%${param.text}%" ORDER BY isTop DESC , creat_time DESC LIMIT ${page},${row}`);
            if (res) {
                let res2 = await this.blogRepository.query(`SELECT COUNT(blogId) from blog where showIndex = 1 and blog.title like "%${param.text}%" or blog.body like  "%${param.text}%" or blog.className like "%${param.text}%"`);
                return { success: true, data: res, total: Number(res2[0]['COUNT(blogId)']) };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findAllBlogByclassName(param) {
        let row = param.row;
        let page = (param.page - 1) * row;
        try {
            let res = await this.blogRepository.query(`select blog.* , (select COUNT(blogId) from blog_commit where blog_commit.blogId = blog.blogId) as reviewsCount , (select COUNT(blogId) from blog_fabulous where blog_fabulous.blogId = blog.blogId) as fabulousCount from blog where blog.showIndex = 1 and className = '${param.className}' ORDER BY isTop DESC , creat_time DESC LIMIT ${page},${row}`);
            if (res) {
                return { success: true, data: res, total: res.length };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findBlogByBlogId(param) {
        try {
            let res = await this.blogRepository.query(`select blog.* , (select COUNT(blogId) from blog_commit where blog_commit.blogId = blog.blogId) as reviewsCount , (select user.mail from user where user.name = blog.userName) as mail, (select COUNT(blogId) from blog_fabulous where blog_fabulous.blogId = blog.blogId) as fabulousCount from blog where blogId = ${param.blogId}`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findBlogClass(param) {
        try {
            let res = await this.blogRepository.query(`SELECT *  FROM blog_class`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async addBlogClass(param) {
        try {
            let blogClass = await this.blogRepository.query(`SELECT * FROM blog_class where className = '#${param.className}'`);
            if (blogClass.length == 0) {
                let res = await this.blogClassRepository.save({ className: '#' + param.className });
                if (res) {
                    return { success: true, data: res };
                }
                else {
                    return { success: false, errorMsg: '增加失败' };
                }
            }
            else {
                return { success: false, errorMsg: '已有该分类' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async deleteBlogClass(param) {
        try {
            console.log(`SELECT * FROM blog where className = '${param.className}'`);
            let blog = await this.blogRepository.query(`SELECT * FROM blog where className = '${param.className}'`);
            console.log(blog);
            if (blog.length == 0) {
                let res = await this.blogClassRepository.query(`DELETE FROM blog_class WHERE className = '${param.className}'`);
                if (res) {
                    return { success: true, data: res };
                }
                else {
                    return { success: false, errorMsg: '删除失败' };
                }
            }
            else {
                return { success: false, errorMsg: '有取决于该分类的博客' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findBlogByClassName(param) {
        try {
            let res = await this.blogRepository.query(`SELECT * FROM blog WHERE className = '${param.className}'`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async addReadCount(param) {
        try {
            let res = await this.blogRepository.query(`UPDATE blog SET readcount = readcount + 1 WHERE blogId = ${param.blogId}`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '更新失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async addCollect(param) {
        try {
            let res = await this.blogRepository.query(`INSERT INTO blog_collect(userName,blogId) VALUES('${param.userName}','${param.blogId}')`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '插入失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async cancelCollect(param) {
        try {
            let res = await this.blogRepository.query(`DELETE FROM blog_collect WHERE blogId = ${param.blogId} AND userName = '${param.userName}'`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '删除失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async addFabulous(param) {
        try {
            let res = await this.blogRepository.query(`INSERT INTO blog_fabulous(commitName,blogId) VALUES('${param.userName}','${param.blogId}')`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '插入失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async cancelFabulous(param) {
        try {
            let res = await this.blogRepository.query(`DELETE FROM blog_fabulous WHERE blogId = ${param.blogId} AND commitName = '${param.userName}'`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '删除失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findCollectAndFab(param) {
        try {
            let collect = false;
            let fab = false;
            let res = await this.blogRepository.query(`select * FROM blog_collect WHERE blogId = ${param.blogId} AND userName = '${param.userName}'`);
            if (res) {
                if (res != '') {
                    collect = true;
                }
                let res2 = await this.blogRepository.query(`select * FROM blog_fabulous WHERE blogId = ${param.blogId} AND commitName = '${param.userName}'`);
                if (res2 != '') {
                    fab = true;
                }
                return {
                    success: true, data: { collect, fab }
                };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findBlogCommitByBlogId(param) {
        try {
            let res = await this.blogRepository.query(`select blog_commit.id,blog_commit.blogId,blog_commit.update_time,blog_commit.commitBody,blog_commitReview.*, user.name,user.headImg,user.sex,user.nickName from (blog_commit left join blog_commitReview on blog_commit.id=blog_commitReview.commitId)  left join user on blog_commit.commitName=user.name where blogId = ${param.blogId}`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findFabByUsername(param) {
        try {
            let res = await this.blogRepository.query(`select blog.* , (select COUNT(blogId) from blog_commit where blog_commit.blogId = blog.blogId) as reviewsCount , (select COUNT(blogId) from blog_fabulous where blog_fabulous.blogId = blog.blogId) as fabulousCount from blog LEFT JOIN blog_fabulous as b on blog.blogId = b.blogId where b.commitName = '${param.userName}'`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findCollectByUserName(param) {
        try {
            let res = await this.blogRepository.query(`select blog.* , (select COUNT(blogId) from blog_commit where blog_commit.blogId = blog.blogId) as reviewsCount , (select COUNT(blogId) from blog_fabulous where blog_fabulous.blogId = blog.blogId) as fabulousCount from blog  LEFT JOIN blog_collect as b on blog.blogId = b.blogId where b.userName = '${param.userName}'`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findNext(param) {
        try {
            let res = await this.blogRepository.query(`SELECT * FROM blog WHERE blogId < ${param.blogId} and showIndex = 1 ORDER BY creat_time desc limit 1`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async findPre(param) {
        try {
            let res = await this.blogRepository.query(`SELECT * FROM blog WHERE blogId > ${param.blogId} and showIndex = 1 ORDER BY creat_time desc limit 1`);
            if (res) {
                return { success: true, data: res };
            }
            else {
                return { success: false, errorMsg: '查找失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
};
BlogService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(blog_entity_1.Blog)),
    __param(1, typeorm_1.InjectRepository(blog_class_entity_1.Blog_class)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map