"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const config = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: '949729789@qq.com',
        pass: 'vtfosfstfzvtbehf'
    }
};
const transporter = nodemailer.createTransport(config);
function default_1(mail) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mail, (error, info) => {
            if (error) {
                reject(error);
            }
            resolve('success');
        });
    });
}
exports.default = default_1;
;
//# sourceMappingURL=mail.config.js.map