"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CorsMiddleware = class CorsMiddleware {
    use(req, res, next) {
        const origin = req.get('Origin');
        if (origin !== undefined) {
            res.set({
                'Access-Control-Allow-Origin': origin,
            });
            if (req.method === 'OPTIONS') {
                res.set({
                    'Access-Control-Allow-Methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
                    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
                    'Access-Control-Allow-Credentials': 'true'
                });
                res.status(204).end();
                return;
            }
            else {
                res.set({
                    'Access-Control-Allow-Credentials': 'true'
                });
            }
        }
        next();
    }
};
CorsMiddleware = __decorate([
    common_1.Injectable()
], CorsMiddleware);
exports.CorsMiddleware = CorsMiddleware;
//# sourceMappingURL=cors.middleware.js.map