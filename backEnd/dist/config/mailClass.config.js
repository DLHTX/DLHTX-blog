"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailClass {
    constructor(param) {
        this.code = param.code;
        this.toName = param.toName;
        this.toMail = param.toMail;
        this.html = (() => {
            return `<head>
            <base target="_blank" />
            <style type="text/css">::-webkit-scrollbar{ display: none; }</style>
            <style id="cloudAttachStyle" type="text/css">#divNeteaseBigAttach, #divNeteaseBigAttach_bak{display:none;}</style>
            <style id="blockquoteStyle" type="text/css">blockquote{display:none;}</style>
            <style type="text/css">
                body{font-size:14px;font-family:arial,verdana,sans-serif;line-height:1.666;padding:0;margin:0;overflow:auto;white-space:normal;word-wrap:break-word;min-height:100px}
                td, input, button, select, body{font-family:Helvetica, 'Microsoft Yahei', verdana}
                pre {white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;width:95%}
                th,td{font-family:arial,verdana,sans-serif;line-height:1.666}
                img{ border:0}
                header,footer,section,aside,article,nav,hgroup,figure,figcaption{display:block}
                blockquote{margin-right:0px}
            </style>
        </head>
        <body tabindex="0" role="listitem">
        <table width="700" border="0" align="center" cellspacing="0" style="width:700px;">
            <tbody>
            <tr>
                <td>
                    <div style="width:700px;margin:0 auto;border-bottom:1px solid #ccc;margin-bottom:30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="700" height="39" style="font:12px Tahoma, Arial, 宋体;">
                            <tbody><tr><td width="210"></td></tr></tbody>
                        </table>
                    </div>
                    <div style="width:680px;padding:0 10px;margin:0 auto;">
                        <div style="line-height:1.5;font-size:14px;margin-bottom:25px;color:#4d4d4d;">
                            <strong style="display:block;margin-bottom:15px;">尊敬的用户：<span style="color:#f60;font-size: 16px;">${param.toName}</span>您好！</strong>
                            <strong style="display:block;margin-bottom:15px;">
                                您正在进行<span style="color: red">注册账号</span>操作，请在验证码输入框中输入：<span style="color:#f60;font-size: 24px">${param.code}</span>，以完成操作。
                            </strong>
                        </div>
                        <div style="margin-bottom:30px;">
                            <small style="display:block;margin-bottom:20px;font-size:12px;">
                                <p style="color:#747474;">
                                    注意：此操作可能会修改您的密码、登录邮箱或绑定手机。如非本人操作，请及时登录并修改密码以保证帐户安全
                                    <br>（工作人员不会向你索取此验证码，请勿泄漏！)
                                </p>
                            </small>
                        </div>
                    </div>
                    <div style="width:700px;margin:0 auto;">
                        <div style="padding:10px 10px 0;border-top:1px solid #ccc;color:#747474;margin-bottom:20px;line-height:1.3em;font-size:12px;">
                            <p>此为系统邮件，请勿回复<br>
                                请保管好您的邮箱，避免账号被他人盗用
                            </p>
                            <p>DLHTX博客团队</p>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </body>`;
        })();
        this.html2 = (() => {
            return `<head>
        <base target="_blank" />
        <style type="text/css">::-webkit-scrollbar{ display: none; }</style>
        <style id="cloudAttachStyle" type="text/css">#divNeteaseBigAttach, #divNeteaseBigAttach_bak{display:none;}</style>
        <style id="blockquoteStyle" type="text/css">blockquote{display:none;}</style>
        <style type="text/css">
            body{font-size:14px;font-family:arial,verdana,sans-serif;line-height:1.666;padding:0;margin:0;overflow:auto;white-space:normal;word-wrap:break-word;min-height:100px}
            td, input, button, select, body{font-family:Helvetica, 'Microsoft Yahei', verdana}
            pre {white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;width:95%}
            th,td{font-family:arial,verdana,sans-serif;line-height:1.666}
            img{ border:0}
            header,footer,section,aside,article,nav,hgroup,figure,figcaption{display:block}
            blockquote{margin-right:0px}
        </style>
    </head>
    <body tabindex="0" role="listitem">
    <table width="700" border="0" align="center" cellspacing="0" style="width:700px;">
        <tbody>
        <tr>
            <td>
                <div style="width:700px;margin:0 auto;border-bottom:1px solid #ccc;margin-bottom:30px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="700" height="39" style="font:12px Tahoma, Arial, 宋体;">
                        <tbody><tr><td width="210"></td></tr></tbody>
                    </table>
                </div>
                <div style="width:680px;padding:0 10px;margin:0 auto;">
                    <div style="line-height:1.5;font-size:14px;margin-bottom:25px;color:#4d4d4d;">
                        <strong style="display:block;margin-bottom:15px;">尊敬的用户：<span style="color:#f60;font-size: 16px;"></span>您好！</strong>
                        <strong style="display:block;margin-bottom:15px;">
                            您的博客有来自<span style="color: red">${param.toName}</span>的新评论，请点击链接<a href='${param.href}'>${param.href}</a>来查看，以完成操作。
                        </strong>
                    </div>
                    <div style="margin-bottom:30px;">
                        <small style="display:block;margin-bottom:20px;font-size:12px;">
                            <p style="color:#747474;">
                            </p>
                        </small>
                    </div>
                </div>
                <div style="width:700px;margin:0 auto;">
                    <div style="padding:10px 10px 0;border-top:1px solid #ccc;color:#747474;margin-bottom:20px;line-height:1.3em;font-size:12px;">
                        <p>此为系统邮件，请勿回复<br>
                            请保管好您的邮箱，避免账号被他人盗用
                        </p>
                        <p>DLHTX博客团队</p>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    </body>`;
        })();
        this.html3 = (() => {
            return `<head>
            <base target="_blank" />
            <style type="text/css">::-webkit-scrollbar{ display: none; }</style>
            <style id="cloudAttachStyle" type="text/css">#divNeteaseBigAttach, #divNeteaseBigAttach_bak{display:none;}</style>
            <style id="blockquoteStyle" type="text/css">blockquote{display:none;}</style>
            <style type="text/css">
                body{font-size:14px;font-family:arial,verdana,sans-serif;line-height:1.666;padding:0;margin:0;overflow:auto;white-space:normal;word-wrap:break-word;min-height:100px}
                td, input, button, select, body{font-family:Helvetica, 'Microsoft Yahei', verdana}
                pre {white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;width:95%}
                th,td{font-family:arial,verdana,sans-serif;line-height:1.666}
                img{ border:0}
                header,footer,section,aside,article,nav,hgroup,figure,figcaption{display:block}
                blockquote{margin-right:0px}
            </style>
        </head>
        <body tabindex="0" role="listitem">
        <table width="700" border="0" align="center" cellspacing="0" style="width:700px;">
            <tbody>
            <tr>
                <td>
                    <div style="width:700px;margin:0 auto;border-bottom:1px solid #ccc;margin-bottom:30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="700" height="39" style="font:12px Tahoma, Arial, 宋体;">
                            <tbody><tr><td width="210"></td></tr></tbody>
                        </table>
                    </div>
                    <div style="width:680px;padding:0 10px;margin:0 auto;">
                        <div style="line-height:1.5;font-size:14px;margin-bottom:25px;color:#4d4d4d;">
                            <strong style="display:block;margin-bottom:15px;">尊敬的用户：<span style="color:#f60;font-size: 16px;"></span>您好！</strong>
                            <strong style="display:block;margin-bottom:15px;">
                                您有来自<span style="color: red">${param.toName}</span>的新回复，请点击链接<a href='${param.href}'>${param.href}</a>来查看，以完成操作。
                            </strong>
                        </div>
                        <div style="margin-bottom:30px;">
                            <small style="display:block;margin-bottom:20px;font-size:12px;">
                                <p style="color:#747474;">
                                </p>
                            </small>
                        </div>
                    </div>
                    <div style="width:700px;margin:0 auto;">
                        <div style="padding:10px 10px 0;border-top:1px solid #ccc;color:#747474;margin-bottom:20px;line-height:1.3em;font-size:12px;">
                            <p>此为系统邮件，请勿回复<br>
                                请保管好您的邮箱，避免账号被他人盗用
                            </p>
                            <p>DLHTX博客团队</p>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </body>`;
        })();
        this.mailCode = {
            from: '<949729789@qq.com>',
            subject: 'DLHTX',
            to: this.toMail,
            html: (() => {
                if (param.type == '验证码') {
                    return (this.html);
                }
                else if (param.type == '评论提示') {
                    return this.html2;
                }
                else {
                    return this.html3;
                }
            })()
        };
    }
}
exports.MailClass = MailClass;
//# sourceMappingURL=mailClass.config.js.map