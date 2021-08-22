import { CharacterGenderEnum } from "Resources/Enums/CharacterEnums/CharacterGenderEnum";
import { CharacterNameLengthEnum } from "Resources/Enums/CharacterEnums/CharacterNameLengthEnum";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";

export class GenerateNameQuery {
    public gender: CharacterGenderEnum;
    public race: CharacterRaceEnum;
    public length: CharacterNameLengthEnum;

    constructor(race?: CharacterRaceEnum, gender?:CharacterGenderEnum, length?:CharacterNameLengthEnum){
        this.gender = gender || CharacterGenderEnum.NotSpecified;
        this.race = race || CharacterRaceEnum.NotSpecified;
        this.length = length || CharacterNameLengthEnum.NotSpecified;
    }
}
