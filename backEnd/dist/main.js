"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const session = require("express-session");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '..', 'staticDir/img/'), {
        prefix: '/img/',
    });
    app.useStaticAssets(path_1.join(__dirname, '..', 'staticDir/uploads/'), {
        prefix: '/uploads/',
    });
    app.useStaticAssets(path_1.join(__dirname, '..', 'staticDir/file/'), {
        prefix: '/file/',
    });
    app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('DLHTX博客')
        .setDescription('DLHTX博客后台api文档')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map