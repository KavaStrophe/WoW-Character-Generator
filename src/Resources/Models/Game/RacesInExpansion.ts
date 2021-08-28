import { CharacterRace } from "Resources/Enums/Character/CharacterRace";

export interface RacesInExpansion {
    newRaces: CharacterRace[];
    newPlayableRaces: CharacterRace[];
    availableRaces: CharacterRace[];
    availablePlayableRaces:CharacterRace[];
}
