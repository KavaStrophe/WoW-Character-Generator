import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";
import { GetPronounsOfGender } from "../DictionaryHelpers/GetPronounsOfGender";
import { GetStringWithFirstLetterCapitalized } from "./GetStringWithFirstLetterCapitalized";

export const GetFormattedTraitDescription = (description:string, identity: CharacterIdentity, gender: CharacterGender):string => {
    const pronouns = GetPronounsOfGender(gender);

    return description.replace("{Firstname}", identity.firstName)
        .replace("{PersonalPronoun}", GetStringWithFirstLetterCapitalized(pronouns.personal))
        .replace("{personalPronoun}", pronouns.personal)
        .replace("{PossessivePronoun}", GetStringWithFirstLetterCapitalized(pronouns.possessive))
        .replace("{possessivePronoun}", pronouns.possessive)
        .replace("{PemonstrativePronoun}", GetStringWithFirstLetterCapitalized(pronouns.demonstrative))
        .replace("{demonstrativePronoun}", pronouns.demonstrative);
}
