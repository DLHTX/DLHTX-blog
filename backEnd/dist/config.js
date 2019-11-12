"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class config {
}
config.dbConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '106111',
    database: 'mytest',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], synchronize: true,
};
config.emailConfig = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: '949729789@qq.com',
        pass: 'vtfosfstfzvtbehf'
    }
};
config.baseImgUrl = 'http://dlhtx.zicp.vip:3000/img/';
config.baseUploadUrl = 'http://dlhtx.zicp.vip:3000/uploads/';
exports.config = config;
//# sourceMappingURL=config.js.map