import { GameExpansion } from "Resources/Enums/Game/GameExpansion";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { CharacterIdentity } from "./CharacterIdentity";
import { CharacterClass } from "./CharacterClass";

export class CharacterInfoIncomplete {
    identity?: CharacterIdentity;
    gender?: CharacterGender;
    race?: CharacterRace;
    expansion?: GameExpansion;
    characterClass?: CharacterClass;

    constructor();

    constructor(identity?: CharacterIdentity, gender?: CharacterGender, race?: CharacterRace, expansion?: GameExpansion, characterClass?: CharacterClass) {
        this.identity = identity;
        this.gender = gender;
        this.race = race;
        this.expansion = expansion;
        this.characterClass = characterClass;
    }
}
