import { BlogService } from './../controller/blog/blog.service';
import { NestMiddleware } from '@nestjs/common';
export declare class AuthUserMiddleware implements NestMiddleware {
    private blogService;
    constructor(blogService: BlogService);
    use(req: any, res: any, next: () => void): any;
}
