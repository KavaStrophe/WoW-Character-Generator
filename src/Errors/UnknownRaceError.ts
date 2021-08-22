export class UnknownRaceError extends Error {
    constructor(race: string){
        super(`Unknown expansion: ${race}`);
    }
}
