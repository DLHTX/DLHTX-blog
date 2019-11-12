import { UpdateBlogDto } from './../../dto/updateBlog.dto';
import { BlogDto } from './../../dto/blog.dto';
import { Blog } from '../../entity/blog.entity';
import { Repository } from 'typeorm';
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog>);
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
        } & Blog;
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
