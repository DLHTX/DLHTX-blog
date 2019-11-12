import { BlogDto } from './../../dto/blog.dto';
import { CommitService } from './commit.service';
export declare class CommitController {
    private commitService;
    constructor(commitService: CommitService);
    addBlog(blog: BlogDto): Promise<void>;
}
