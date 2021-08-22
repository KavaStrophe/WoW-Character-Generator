import { RaceTypeEnum } from "Resources/Enums/RaceTypeEnum";
import { CharacterInfoIncomplete } from "./CharacterInfoIncomplete";

export interface GenerateCharacterInfoQuery {
    preFilledCharacterInfo: CharacterInfoIncomplete;
    raceType: RaceTypeEnum
}
