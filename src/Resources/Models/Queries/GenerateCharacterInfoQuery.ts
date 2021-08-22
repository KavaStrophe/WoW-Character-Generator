import { GameRaceTypeEnum } from "Resources/Enums/GameEnums/GameRaceTypeEnum";
import { CharacterInfoIncomplete } from "../CharacterInfoIncomplete";

export interface GenerateCharacterInfoQuery {
    preFilledCharacterInfo: CharacterInfoIncomplete;
    raceType: GameRaceTypeEnum
}
