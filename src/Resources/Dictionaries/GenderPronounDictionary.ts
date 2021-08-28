import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { GenderPronoun } from "Resources/Models/Characters/GenderPronoun";

 
export const GenderPronounDictionary = new Map<CharacterGender, GenderPronoun>([
    [CharacterGender.Female, {
        personal: "she",
        possessive: "her",
        demonstrative: "her"
    }],
    [CharacterGender.Male, {
        personal: "he",
        possessive: "his",
        demonstrative: "him"
    }]
])
