import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterNameLength } from "Resources/Enums/Character/CharacterNameLength";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";

export interface GenerateNameQuery {
    gender: CharacterGender;
    race: CharacterRace;
    length: CharacterNameLength;
}
