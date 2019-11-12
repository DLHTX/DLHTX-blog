"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("./middleware/auth.middleware");
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controller/user/user.controller");
const user_service_1 = require("./controller/user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const blog_entity_1 = require("./entity/blog.entity");
const blog_commit_entity_1 = require("./entity/blog_commit.entity");
const blog_controller_1 = require("./controller/blog/blog.controller");
const blog_service_1 = require("./controller/blog/blog.service");
const commit_controller_1 = require("./controller/commit/commit.controller");
const commit_service_1 = require("./controller/commit/commit.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '106111',
                database: 'mytest',
                entities: [__dirname + '/**/*.entity{.ts,.js}'], synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, blog_entity_1.Blog, blog_commit_entity_1.Blog_commit]),
        ],
        controllers: [user_controller_1.UserController, blog_controller_1.BlogController, commit_controller_1.CommitController],
        providers: [user_service_1.UserService, blog_service_1.BlogService, commit_service_1.CommitService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map