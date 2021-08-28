import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { GenderNameDictionary } from "Resources/Dictionaries/GenderNameDictionary";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";

export const GetNameForGender = (gender: CharacterGender):string => {
    const name = GenderNameDictionary.get(gender);
    if(!name){
        throw new PersonalizedError(ErrorCode.UnknownAttribute);
    }

    return name;
}
