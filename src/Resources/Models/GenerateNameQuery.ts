import { GenderEnum } from "Resources/Enums/GenderEnum";
import { NameLengthEnum } from "Resources/Enums/NameLengthEnum";
import { RaceEnum } from "Resources/Enums/RaceEnum";

export class GenerateNameQuery {
    public gender: GenderEnum;
    public race: RaceEnum;
    public length: NameLengthEnum;

    constructor(race?: RaceEnum, gender?:GenderEnum, length?:NameLengthEnum){
        this.gender = gender || GenderEnum.NotSpecified;
        this.race = race || RaceEnum.NotSpecified;
        this.length = length || NameLengthEnum.NotSpecified;
    }
}
