import { FileService } from './file.service';
export declare class FileController {
    private fileService;
    constructor(fileService: FileService);
    upImg(file: any, body: any): Promise<{
        success: boolean;
        data: string;
        msg: string;
    }>;
    upload(file: any, body: any): Promise<{
        success: boolean;
        data: string;
        msg: string;
    }>;
    avatar(res: any): Promise<void>;
    randomBg(res: any): Promise<void>;
}
