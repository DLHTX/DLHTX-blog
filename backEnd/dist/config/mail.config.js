"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const config_1 = require("../config");
const transporter = nodemailer.createTransport(config_1.config);
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