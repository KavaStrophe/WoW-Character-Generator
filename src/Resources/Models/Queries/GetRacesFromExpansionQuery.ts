import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";
import { GameRaceTypeEnum } from "Resources/Enums/GameEnums/GameRaceTypeEnum";

export interface GetRacesFromExpansionQuery {
    expansion: GameExpansionEnum,
    raceType: GameRaceTypeEnum
}
