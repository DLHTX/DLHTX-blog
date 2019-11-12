import { BlogCollectDto } from '../../dto/blog/blogCollect.dto';
import { BlogIdDto } from '../../dto/blog/blogId.dto';
import { ClassNameDto } from '../../dto/blog/className.dto';
import { BlogClass } from '../../dto/blog/blogClass.dto';
import { FindBlogDto } from '../../dto/blog/findBlog.dto';
import { AllBlogDto } from '../../dto/blog/allBlog.dto';
import { BlogUserNameDto } from '../../dto/blog/blogUserName.dto';
import { UpdateBlogDto } from '../../dto/blog/updateBlog.dto';
import { BlogDto } from '../../dto/blog/blog.dto';
import { Blog } from '../../entity/blog.entity';
import { Blog_class } from '../../entity/blog_class.entity';
import { Repository } from 'typeorm';
export declare class BlogService {
    private readonly blogRepository;
    private readonly blogClassRepository;
    constructor(blogRepository: Repository<Blog>, blogClassRepository: Repository<Blog_class>);
    authBlogUser(payload: any): Promise<any>;
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
            showIndex: string;
            isTop: string;
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
    deleteBlog(blog: BlogIdDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findBlogByUsername(param: BlogUserNameDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findAllBlogAndCommit(param: AllBlogDto): Promise<{
        success: boolean;
        data: any;
        total: number;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
        total?: undefined;
    }>;
    searchBlogbyTitleAndBody(param: FindBlogDto): Promise<{
        success: boolean;
        data: any;
        total: number;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
        total?: undefined;
    }>;
    findAllBlogByclassName(param: BlogClass): Promise<{
        success: boolean;
        data: any;
        total: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
        total?: undefined;
    }>;
    findBlogByBlogId(param: BlogIdDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findBlogClass(param: any): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    addBlogClass(param: ClassNameDto): Promise<{
        success: boolean;
        data: {
            className: string;
        } & Blog_class;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    deleteBlogClass(param: ClassNameDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findBlogByClassName(param: ClassNameDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    addReadCount(param: BlogIdDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    addCollect(param: BlogCollectDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    cancelCollect(param: BlogCollectDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    addFabulous(param: BlogCollectDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    cancelFabulous(param: BlogCollectDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findCollectAndFab(param: BlogCollectDto): Promise<{
        success: boolean;
        data: {
            collect: boolean;
            fab: boolean;
        };
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findBlogCommitByBlogId(param: BlogIdDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findFabByUsername(param: BlogUserNameDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findCollectByUserName(param: BlogUserNameDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findNext(param: BlogIdDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
    findPre(param: BlogIdDto): Promise<{
        success: boolean;
        data: any;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        data?: undefined;
    }>;
}
