import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";
import { RaceTypeEnum } from "Resources/Enums/RaceTypeEnum";

export interface GetRacesFromExpansionQuery {
    expansion: ExpansionEnum,
    raceType: RaceTypeEnum
}
