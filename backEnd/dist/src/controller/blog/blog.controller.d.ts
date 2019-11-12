import { UpdateBlogDto } from './../../dto/updateBlog.dto';
import { BlogDto } from './../../dto/blog.dto';
import { BlogService } from './blog.service';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    addBlog(blog: BlogDto): Promise<{
        success: boolean;
        data: {
            userName: string;
            title: string;
            body: string;
            className: string;
            creat_time: Date;
            update_time: Date;
            bgImg: string;
            upFileUrl: string;
        } & import("../../entity/blog.entity").Blog;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    updateBlog(blog: UpdateBlogDto): Promise<{
        success: boolean;
        data: import("typeorm").UpdateResult;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
}
