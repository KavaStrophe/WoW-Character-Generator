import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { BurningCrusadeRaces } from "./BurningCrusadeRaces";

const wrathOfTheLichKingNewPlayableRaces: RaceEnum[] = [];
const wrathOfTheLichKingNewRaces: RaceEnum[] = [...wrathOfTheLichKingNewPlayableRaces];

export class WrathOfTheLichKingRaces implements IRaceInExpansion {
    static NewRaces = wrathOfTheLichKingNewRaces;
    static NewPlayableRaces = wrathOfTheLichKingNewRaces;
    static AvailableRaces = [...BurningCrusadeRaces.AvailableRaces, ...wrathOfTheLichKingNewRaces];
    static AvailablePlayableRaces = [...BurningCrusadeRaces.AvailablePlayableRaces, ...wrathOfTheLichKingNewPlayableRaces];
} 
