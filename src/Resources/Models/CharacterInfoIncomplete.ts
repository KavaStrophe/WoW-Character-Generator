import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";
import { GenderEnum } from "Resources/Enums/GenderEnum";
import { RaceEnum } from "Resources/Enums/RaceEnum";
import { CharacterIdentity } from "./CharacterIdentity";

export interface CharacterInfoIncomplete {
    identity?: CharacterIdentity;
    age?: number;
    gender?: GenderEnum;
    race?: RaceEnum;
    expansion?: ExpansionEnum;
}
