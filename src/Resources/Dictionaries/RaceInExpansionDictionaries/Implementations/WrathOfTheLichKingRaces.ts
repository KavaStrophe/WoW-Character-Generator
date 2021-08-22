import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { BurningCrusadeRaces } from "./BurningCrusadeRaces";

const wrathOfTheLichKingNewPlayableRaces: CharacterRaceEnum[] = [];
const wrathOfTheLichKingNewRaces: CharacterRaceEnum[] = [...wrathOfTheLichKingNewPlayableRaces];

export class WrathOfTheLichKingRaces implements IRaceInExpansion {
    static NewRaces = wrathOfTheLichKingNewRaces;
    static NewPlayableRaces = wrathOfTheLichKingNewRaces;
    static AvailableRaces = [...BurningCrusadeRaces.AvailableRaces, ...wrathOfTheLichKingNewRaces];
    static AvailablePlayableRaces = [...BurningCrusadeRaces.AvailablePlayableRaces, ...wrathOfTheLichKingNewPlayableRaces];
} 
