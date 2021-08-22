import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";
import { GenderEnum } from "Resources/Enums/GenderEnum";
import { RaceEnum } from "Resources/Enums/RaceEnum";
import { CharacterIdentity } from "./CharacterIdentity";
import { CharacterInfoIncomplete } from "./CharacterInfoIncomplete";

export interface CharacterInfo extends CharacterInfoIncomplete{
    identity: CharacterIdentity;
    age: number;
    gender: GenderEnum;
    race: RaceEnum;
    expansion: ExpansionEnum;
}
