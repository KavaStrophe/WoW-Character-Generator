import { GameExpansion } from "Resources/Enums/Game/GameExpansion";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { CharacterIdentity } from "./CharacterIdentity";
import { CharacterInfoIncomplete } from "./CharacterInfoIncomplete";

export class CharacterInfo extends CharacterInfoIncomplete{
    identity: CharacterIdentity;
    age: number;
    gender: CharacterGender;
    race: CharacterRace;
    expansion: GameExpansion;

    constructor(identity: CharacterIdentity, age: number, gender: CharacterGender, race: CharacterRace, expansion: GameExpansion) {
        super();
        this.identity = identity;
        this.age = age;
        this.gender = gender;
        this.race = race;
        this.expansion = expansion;
    }
}
