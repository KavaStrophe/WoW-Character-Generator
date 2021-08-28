import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { RaceNameDictionary } from "Resources/Dictionaries/RaceNameDictionary";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";

export const GetNameForRace = (race: CharacterRace):string => {
    const name = RaceNameDictionary.get(race);
    if(!name){
        throw new PersonalizedError(ErrorCode.UnknownAttribute);
    }

    return name;
}
