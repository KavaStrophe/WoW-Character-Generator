import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";
import { CharacterGenderEnum } from "Resources/Enums/CharacterEnums/CharacterGenderEnum";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { CharacterIdentity } from "./CharacterIdentity";
import { CharacterInfoIncomplete } from "./CharacterInfoIncomplete";

export interface CharacterInfo extends CharacterInfoIncomplete{
    identity: CharacterIdentity;
    age: number;
    gender: CharacterGenderEnum;
    race: CharacterRaceEnum;
    expansion: GameExpansionEnum;
}
