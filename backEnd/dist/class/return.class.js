"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReturnClass {
    constructor(errorMsg) {
    }
    returnFalse(errorMsg) {
        return { success: false, errorMsg };
    }
    returnTrue(data) {
        return { success: true, data };
    }
}
exports.ReturnClass = ReturnClass;
//# sourceMappingURL=return.class.js.map