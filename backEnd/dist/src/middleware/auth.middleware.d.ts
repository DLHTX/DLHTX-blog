import { NestMiddleware } from '@nestjs/common';
export declare class AuthMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
