import { CharacterRace } from "Resources/Enums/Character/CharacterRace";

export class RacesInExpansion {
    newRaces: CharacterRace[];
    newPlayableRaces: CharacterRace[];
    availableRaces: CharacterRace[];
    availablePlayableRaces:CharacterRace[];

    constructor(
        newPlayableRaces: CharacterRace[], 
        availablePlayableRaces: CharacterRace[],
        newRaces: CharacterRace[], 
        availableRaces: CharacterRace[]
    ){
        this.newRaces = newRaces;
        this.newPlayableRaces = newPlayableRaces;
        this.availablePlayableRaces = availablePlayableRaces;
        this.availableRaces = availableRaces;
    }
}
