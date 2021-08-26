import { CharacterGender } from "Resources/Enums/Character/CharacterGender";

export const GenderNameDictionary = new Map<CharacterGender, string>([
    [CharacterGender.Female, "Female"],
    [CharacterGender.Male, "Male"],
    [CharacterGender.NotSpecified, "???"],
])
