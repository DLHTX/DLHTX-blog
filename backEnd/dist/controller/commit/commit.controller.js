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
const commitId_dto_1 = require("./../../dto/commit/commitId.dto");
const reviewCommit_dto_1 = require("./../../dto/commit/reviewCommit.dto");
const addCommit_dto_1 = require("./../../dto/commit/addCommit.dto");
const commit_service_1 = require("./commit.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let CommitController = class CommitController {
    constructor(commitService) {
        this.commitService = commitService;
    }
    async addCommit(param) {
        return await this.commitService.addCommit(param);
    }
    async reviewCommit(param) {
        return await this.commitService.reviewCommit(param);
    }
    async deleteCommit(param) {
        return await this.commitService.deleteCommit(param);
    }
    async deleteCommitReview(param) {
        return await this.commitService.deleteCommitReview(param);
    }
};
__decorate([
    common_1.Post('/addCommit'),
    swagger_1.ApiOperation({ title: '增加博客评论' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addCommit_dto_1.AddCommitDto]),
    __metadata("design:returntype", Promise)
], CommitController.prototype, "addCommit", null);
__decorate([
    common_1.Post('/reviewCommit'),
    swagger_1.ApiOperation({ title: '回复评论' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reviewCommit_dto_1.ReviewCommitDto]),
    __metadata("design:returntype", Promise)
], CommitController.prototype, "reviewCommit", null);
__decorate([
    common_1.Delete('/deleteCommit'),
    swagger_1.ApiOperation({ title: '删除评论(传入id)' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commitId_dto_1.commitIdDto]),
    __metadata("design:returntype", Promise)
], CommitController.prototype, "deleteCommit", null);
__decorate([
    common_1.Delete('/deleteCommitReview'),
    swagger_1.ApiOperation({ title: '删除评论(传入id)' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commitId_dto_1.commitIdDto]),
    __metadata("design:returntype", Promise)
], CommitController.prototype, "deleteCommitReview", null);
CommitController = __decorate([
    swagger_1.ApiUseTags('评论相关api'),
    common_1.Controller('commit'),
    __metadata("design:paramtypes", [commit_service_1.CommitService])
], CommitController);
exports.CommitController = CommitController;
//# sourceMappingURL=commit.controller.js.map