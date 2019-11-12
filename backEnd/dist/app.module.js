"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_middleware_1 = require("./middleware/cors.middleware");
const auth_user_middleware_1 = require("./middleware/auth-user.middleware");
const auth_middleware_1 = require("./middleware/auth.middleware");
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controller/user/user.controller");
const user_service_1 = require("./controller/user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const blog_entity_1 = require("./entity/blog.entity");
const blog_commit_entity_1 = require("./entity/blog_commit.entity");
const blog_readIp_entity_1 = require("./entity/blog_readIp.entity");
const blog_collect_entity_1 = require("./entity/blog_collect.entity");
const blog_fabulous_entity_1 = require("./entity/blog_fabulous.entity");
const blog_commitreview_entity_1 = require("./entity/blog_commitreview.entity");
const blog_class_entity_1 = require("./entity/blog_class.entity");
const blog_controller_1 = require("./controller/blog/blog.controller");
const blog_service_1 = require("./controller/blog/blog.service");
const commit_controller_1 = require("./controller/commit/commit.controller");
const commit_service_1 = require("./controller/commit/commit.service");
const file_controller_1 = require("./controller/file/file.controller");
const file_service_1 = require("./controller/file/file.service");
const config_1 = require("./config");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(cors_middleware_1.CorsMiddleware)
            .forRoutes('*')
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes('blog/addBlog', 'blog/updateBlog', 'blog/deleteBlog', 'blog/updateBlog', 'blog/findBlogByUsername', 'blog/findBlogClass', 'blog/addCollect', 'blog/cancelCollect', 'blog/addFabulous', 'blog/cancelFabulous', 'blog/findCollectByUserName', 'commit')
            .apply(auth_user_middleware_1.AuthUserMiddleware)
            .forRoutes('blog/deleteBlog', 'blog/updateBlog');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_1.config.dbConfig),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, blog_entity_1.Blog, blog_commit_entity_1.Blog_commit, blog_readIp_entity_1.Blog_readIp, blog_collect_entity_1.Blog_collect, blog_fabulous_entity_1.Blog_fabulous, blog_commitreview_entity_1.Blog_commitreview, blog_class_entity_1.Blog_class]),
            common_1.HttpModule
        ],
        controllers: [user_controller_1.UserController, blog_controller_1.BlogController, commit_controller_1.CommitController, file_controller_1.FileController],
        providers: [user_service_1.UserService, blog_service_1.BlogService, commit_service_1.CommitService, file_service_1.FileService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map