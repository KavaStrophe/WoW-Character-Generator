import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterNameLength } from "Resources/Enums/Character/CharacterNameLength";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";

export class GenerateNameQuery {
    public gender: CharacterGender;
    public race: CharacterRace;
    public length: CharacterNameLength;

    constructor(race?: CharacterRace, gender?:CharacterGender, length?:CharacterNameLength){
        this.gender = gender || CharacterGender.NotSpecified;
        this.race = race || CharacterRace.NotSpecified;
        this.length = length || CharacterNameLength.NotSpecified;
    }
}
