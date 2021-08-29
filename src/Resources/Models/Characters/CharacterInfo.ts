import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { CharacterIdentity } from "./CharacterIdentity";
import { CharacterClass } from "./CharacterClass";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { CharacterAttributes } from "./CharacterAttributes";

export interface CharacterInfo {
    identity: CharacterIdentity;
    gender: CharacterGender;
    race: CharacterRace;
    characterClass: CharacterClass;
    traits: CharacterTrait[];
    attributes: CharacterAttributes;
    seed: string;
}
