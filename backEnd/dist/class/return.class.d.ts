export declare class ReturnClass {
    success: boolean;
    errorMsg: string;
    data: any;
    constructor(errorMsg: string);
    returnFalse(errorMsg: string): {
        success: boolean;
        errorMsg: string;
    };
    returnTrue(data: any): {
        success: boolean;
        data: any;
    };
}
