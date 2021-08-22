import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { VanillaRaces } from "./VanillaRaces";

const burningCrusadeNewPlayableRaces: RaceEnum[] = [];
const burningCrusadeNewRaces: RaceEnum[] = [...burningCrusadeNewPlayableRaces];

export class BurningCrusadeRaces implements IRaceInExpansion {
    static NewRaces = burningCrusadeNewRaces;
    static NewPlayableRaces = burningCrusadeNewRaces;
    static AvailableRaces = [...VanillaRaces.AvailableRaces, ...burningCrusadeNewRaces];
    static AvailablePlayableRaces = [...VanillaRaces.AvailablePlayableRaces, ...burningCrusadeNewPlayableRaces];
} 
