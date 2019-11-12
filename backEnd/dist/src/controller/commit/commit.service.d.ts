import { Blog_commit } from '../../entity/blog_commit.entity';
import { Repository } from 'typeorm';
export declare class CommitService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog_commit>);
}
