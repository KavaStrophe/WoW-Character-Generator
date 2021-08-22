import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { LegionRaces } from "./LegionRaces";

const battleForAzerothNewPlayableRaces: RaceEnum[] = [];
const battleForAzerothNewRaces: RaceEnum[] = [...battleForAzerothNewPlayableRaces];

export class BattleForAzerothRaces implements IRaceInExpansion {
    static NewRaces = battleForAzerothNewRaces;
    static NewPlayableRaces = battleForAzerothNewRaces;
    static AvailableRaces = [...LegionRaces.AvailableRaces, ...battleForAzerothNewRaces];
    static AvailablePlayableRaces = [...LegionRaces.AvailablePlayableRaces, ...battleForAzerothNewPlayableRaces];
} 
