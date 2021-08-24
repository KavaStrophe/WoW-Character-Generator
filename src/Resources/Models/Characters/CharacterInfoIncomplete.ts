import { GameExpansion } from "Resources/Enums/Game/GameExpansion";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { CharacterIdentity } from "./CharacterIdentity";

export class CharacterInfoIncomplete {
    identity?: CharacterIdentity;
    age?: number;
    gender?: CharacterGender;
    race?: CharacterRace;
    expansion?: GameExpansion;

    constructor();

    constructor(identity?: CharacterIdentity, age?: number, gender?: CharacterGender, race?: CharacterRace, expansion?: GameExpansion) {
        this.identity = identity;
        this.age = age;
        this.gender = gender;
        this.race = race;
        this.expansion = expansion;
    }
}
