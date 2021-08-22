import { UnknownRaceError } from "Errors/UnknownRaceError";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IEntitiesToStringDictionaries } from "../IEntitiesToStringDictionaries";

export class RaceToStringDictionary implements IEntitiesToStringDictionaries<CharacterRaceEnum> {
    Get(source: CharacterRaceEnum): string {
        switch(source){
            case CharacterRaceEnum.Draenei:
                return "Draenei";
            case CharacterRaceEnum.Dwarf:
                return "Dwarf";
            default:
                throw new UnknownRaceError(source.toString());
        }
    }
    
}
