import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";
import { GetPronounsOfGender } from "../DictionaryHelpers/GetPronounsOfGender";
import { GetStringWithFirstLetterCapitalized } from "./GetStringWithFirstLetterCapitalized";

export const GetFormattedTraitDescription = (description:string, identity: CharacterIdentity, gender: CharacterGender):string => {
    const pronouns = GetPronounsOfGender(gender);

    return description.replaceAll("{Firstname}", identity.firstName)
        .replaceAll("{PersonalPronoun}", GetStringWithFirstLetterCapitalized(pronouns.personal))
        .replaceAll("{personalPronoun}", pronouns.personal)
        .replaceAll("{PossessivePronoun}", GetStringWithFirstLetterCapitalized(pronouns.possessive))
        .replaceAll("{possessivePronoun}", pronouns.possessive)
        .replaceAll("{PemonstrativePronoun}", GetStringWithFirstLetterCapitalized(pronouns.demonstrative))
        .replaceAll("{demonstrativePronoun}", pronouns.demonstrative);
}
