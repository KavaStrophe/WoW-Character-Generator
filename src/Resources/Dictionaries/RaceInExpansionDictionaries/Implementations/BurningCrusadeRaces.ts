import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { VanillaRaces } from "./VanillaRaces";

const burningCrusadeNewPlayableRaces: CharacterRaceEnum[] = [];
const burningCrusadeNewRaces: CharacterRaceEnum[] = [...burningCrusadeNewPlayableRaces];

export class BurningCrusadeRaces implements IRaceInExpansion {
    static NewRaces = burningCrusadeNewRaces;
    static NewPlayableRaces = burningCrusadeNewRaces;
    static AvailableRaces = [...VanillaRaces.AvailableRaces, ...burningCrusadeNewRaces];
    static AvailablePlayableRaces = [...VanillaRaces.AvailablePlayableRaces, ...burningCrusadeNewPlayableRaces];
} 
