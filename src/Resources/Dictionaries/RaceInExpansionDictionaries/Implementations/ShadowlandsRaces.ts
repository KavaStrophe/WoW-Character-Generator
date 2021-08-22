import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { BattleForAzerothRaces } from "./BattleForAzerothRaces";

const shadowlandsNewPlayableRaces: RaceEnum[] = [];
const shadowlandsNewRaces: RaceEnum[] = [...shadowlandsNewPlayableRaces];

export class ShadowlandsRaces implements IRaceInExpansion {
    static NewRaces = shadowlandsNewRaces;
    static NewPlayableRaces = shadowlandsNewRaces;
    static AvailableRaces = [...BattleForAzerothRaces.AvailableRaces, ...shadowlandsNewRaces];
    static AvailablePlayableRaces = [...BattleForAzerothRaces.AvailablePlayableRaces, ...shadowlandsNewPlayableRaces];
} 
