import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { GenderPronounDictionary } from "Resources/Dictionaries/GenderPronounDictionary";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { GenderPronoun } from "Resources/Models/Characters/GenderPronoun";

export const GetPronounsOfGender = (gender: CharacterGender):GenderPronoun => {
    const pronouns = GenderPronounDictionary.get(gender);
    if(!pronouns){
        throw new PersonalizedError(ErrorCode.UnknownGender);
    }
    return pronouns;
}
