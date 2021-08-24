import { ErrorCode } from "Resources/Enums/System/ErrorCode";

export class PersonalizedError extends Error {
    errorCode: ErrorCode;

    constructor(errorCode: ErrorCode){
        super(`An error occurred`);
        this.errorCode = errorCode;
    }
}
