import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { LegionRaces } from "./LegionRaces";

const battleForAzerothNewPlayableRaces: CharacterRaceEnum[] = [];
const battleForAzerothNewRaces: CharacterRaceEnum[] = [...battleForAzerothNewPlayableRaces];

export class BattleForAzerothRaces implements IRaceInExpansion {
    static NewRaces = battleForAzerothNewRaces;
    static NewPlayableRaces = battleForAzerothNewRaces;
    static AvailableRaces = [...LegionRaces.AvailableRaces, ...battleForAzerothNewRaces];
    static AvailablePlayableRaces = [...LegionRaces.AvailablePlayableRaces, ...battleForAzerothNewPlayableRaces];
} 
