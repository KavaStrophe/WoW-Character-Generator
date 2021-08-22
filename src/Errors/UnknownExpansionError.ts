export class UnknownExpansionError extends Error {
    constructor(expansion:string){
        super(`Unknown expansion: ${expansion}`);
    }
}
