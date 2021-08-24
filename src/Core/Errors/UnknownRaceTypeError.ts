export class UnknownRaceTypeError extends Error {
    constructor(race: string){
        super(`Unknown race type: ${race}`);
    }
}
