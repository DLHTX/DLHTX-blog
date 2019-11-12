import { commitIdDto } from './../../dto/commit/commitId.dto';
import { ReviewCommitDto } from './../../dto/commit/reviewCommit.dto';
import { AddCommitDto } from './../../dto/commit/addCommit.dto';
import { CommitService } from './commit.service';
export declare class CommitController {
    private commitService;
    constructor(commitService: CommitService);
    addCommit(param: AddCommitDto): Promise<any>;
    reviewCommit(param: ReviewCommitDto): Promise<any>;
    deleteCommit(param: commitIdDto): Promise<any>;
    deleteCommitReview(param: commitIdDto): Promise<any>;
}
