import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { BattleForAzerothRaces } from "./BattleForAzerothRaces";

const shadowlandsNewPlayableRaces: CharacterRaceEnum[] = [];
const shadowlandsNewRaces: CharacterRaceEnum[] = [...shadowlandsNewPlayableRaces];

export class ShadowlandsRaces implements IRaceInExpansion {
    static NewRaces = shadowlandsNewRaces;
    static NewPlayableRaces = shadowlandsNewRaces;
    static AvailableRaces = [...BattleForAzerothRaces.AvailableRaces, ...shadowlandsNewRaces];
    static AvailablePlayableRaces = [...BattleForAzerothRaces.AvailablePlayableRaces, ...shadowlandsNewPlayableRaces];
} 
