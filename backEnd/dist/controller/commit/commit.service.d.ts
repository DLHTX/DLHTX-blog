import { commitIdDto } from './../../dto/commit/commitId.dto';
import { UserService } from './../user/user.service';
import { ReviewCommitDto } from './../../dto/commit/reviewCommit.dto';
import { AddCommitDto } from './../../dto/commit/addCommit.dto';
import { Blog_commit } from '../../entity/blog_commit.entity';
import { Repository } from 'typeorm';
export declare class CommitService {
    private readonly commitRepository;
    private readonly userService;
    constructor(commitRepository: Repository<Blog_commit>, userService: UserService);
    addCommit(param: AddCommitDto): Promise<{
        success: boolean;
        errorMsg: any;
    }>;
    reviewCommit(param: ReviewCommitDto): Promise<{
        success: boolean;
        errorMsg: any;
    }>;
    deleteCommit(param: commitIdDto): Promise<{
        success: boolean;
        msg: string;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        msg?: undefined;
    }>;
    deleteCommitReview(param: commitIdDto): Promise<{
        success: boolean;
        msg: string;
        errorMsg?: undefined;
    } | {
        success: boolean;
        errorMsg: any;
        msg?: undefined;
    }>;
}
