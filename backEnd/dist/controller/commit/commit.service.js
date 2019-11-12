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
const user_service_1 = require("./../user/user.service");
const mailClass_config_1 = require("./../../config/mailClass.config");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_commit_entity_1 = require("../../entity/blog_commit.entity");
const typeorm_2 = require("typeorm");
let CommitService = class CommitService {
    constructor(commitRepository, userService) {
        this.commitRepository = commitRepository;
        this.userService = userService;
    }
    async addCommit(param) {
        let mailParam = {
            toName: param.commitName,
            toMail: param.mail,
            type: '评论提醒',
            href: param.href
        };
        let mail = new mailClass_config_1.MailClass(mailParam);
        try {
            let res = await this.commitRepository.query(`INSERT INTO blog_commit(commitName,blogId,commitBody,avatar) VALUES ('${param.commitName}',${param.blogId},'${param.commitBody}','${param.avatar}')`);
            if (res) {
                let mailres = await this.userService.sendMail(mail);
                if (mailres) {
                    return { success: true, errorMsg: '评论成功' };
                }
                else {
                    return { success: true, errorMsg: '提示邮件发送失败' };
                }
            }
            else {
                return { success: false, errorMsg: '插入失败' };
            }
        }
        catch (err) {
            return { success: true, errorMsg: err };
        }
    }
    async reviewCommit(param) {
        try {
            let res = await this.commitRepository.query(`INSERT INTO blog_commitReview(commitId,reviewBody,toUser,fromUser,fromUserImg) VALUES (${param.commitId},'${param.commitBody}','${param.toUser}','${param.fromUser}','${param.fromUserImg}')`);
            if (res) {
                let res2 = await this.commitRepository.query(`SELECT mail FROM user where name = '${param.toUser}'`);
                var mails = res2[0].mail;
                let mailParam = {
                    toName: param.toUser,
                    toMail: mails,
                    type: '回复提醒',
                    href: param.href
                };
                let mail = new mailClass_config_1.MailClass(mailParam);
                let mailres = await this.userService.sendMail(mail);
                if (mailres) {
                    return { success: true, errorMsg: '评论成功' };
                }
                else {
                    return { success: true, errorMsg: '提示邮件发送失败' };
                }
            }
            else {
                return { success: false, errorMsg: '插入失败' };
            }
        }
        catch (err) {
            return { success: true, errorMsg: err };
        }
    }
    async deleteCommit(param) {
        try {
            let res = await this.commitRepository.query(`DELETE FROM blog_commit WHERE id = ${param.id}`);
            if (res) {
                let res2 = await this.commitRepository.query(`DELETE FROM blog_commitReview WHERE commitId = ${param.id}`);
                return {
                    success: true,
                    msg: '删除成功'
                };
            }
            else {
                return { success: false, errorMsg: '删除失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
    async deleteCommitReview(param) {
        try {
            let res = await this.commitRepository.query(`DELETE FROM blog_commitReview WHERE review_id = ${param.id}`);
            if (res) {
                return {
                    success: true,
                    msg: '删除成功'
                };
            }
            else {
                return { success: false, errorMsg: '删除失败' };
            }
        }
        catch (err) {
            return { success: false, errorMsg: err };
        }
    }
};
CommitService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(blog_commit_entity_1.Blog_commit)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], CommitService);
exports.CommitService = CommitService;
//# sourceMappingURL=commit.service.js.map