import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { AttributeLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/AttributeLevelDescriptionDictionary";
import { CharismaLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/CharismaLevelDescriptionDictionary";
import { ConstitutionLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/ConstitutionLevelDescriptionDictionary";
import { DexterityLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/DexterityLevelDescriptionDictionary";
import { IntelligenceLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/IntelligenceLevelDescriptionDictionary";
import { LuckLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/LuckLevelDescriptionDictionary";
import { PerceptionLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/PerceptionLevelDescriptionDictionary";
import { StrengthLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/StrengthLevelDescriptionDictionary";
import { WillpowerLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/WillpowerLevelDescriptionDictionary";
import { WisdomLevelDescriptionDictionary } from "Resources/Dictionaries/AttributeLevelDescriptionDictionnaries/WisdomLevelDescriptionDictionary";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

const GetDescriptionFromDictionary = (descriptionDictionary: Map<CharacterLevel, AttributeDescription>, level: CharacterLevel):AttributeDescription | null => {
    const description = descriptionDictionary.get(level);
    if(!description)
        return null;
    return description;
}

const GetDescriptionFromDictionaryForAttribute = (level: CharacterLevel, attribute: CharacterAttribute): AttributeDescription | null => {
    switch(attribute){
        case CharacterAttribute.Strength:
            return GetDescriptionFromDictionary(StrengthLevelDescriptionDictionary, level);
        case CharacterAttribute.Dexterity:
            return GetDescriptionFromDictionary(DexterityLevelDescriptionDictionary, level);
        case CharacterAttribute.Constitution:
            return GetDescriptionFromDictionary(ConstitutionLevelDescriptionDictionary, level);
        case CharacterAttribute.Intelligence:
            return GetDescriptionFromDictionary(IntelligenceLevelDescriptionDictionary, level);
        case CharacterAttribute.Charisma:
            return GetDescriptionFromDictionary(CharismaLevelDescriptionDictionary, level);
        case CharacterAttribute.Wisdom:
            return GetDescriptionFromDictionary(WisdomLevelDescriptionDictionary, level);
        case CharacterAttribute.Luck:
            return GetDescriptionFromDictionary(LuckLevelDescriptionDictionary, level);
        case CharacterAttribute.Perception:
            return GetDescriptionFromDictionary(PerceptionLevelDescriptionDictionary, level);
        case CharacterAttribute.WillPower:
            return GetDescriptionFromDictionary(WillpowerLevelDescriptionDictionary, level);
        default:
            return GetDescriptionFromDictionary(AttributeLevelDescriptionDictionary, level);
    }
}

export const GetDescriptionForAttributeLevel = (level: CharacterLevel, attribute: CharacterAttribute): AttributeDescription => {
    let description = GetDescriptionFromDictionaryForAttribute(level, attribute);
    if(description === null){
        // In the case of a level not declared, go to the default
        description = GetDescriptionFromDictionary(AttributeLevelDescriptionDictionary, level);
        if(!description){
            throw new PersonalizedError(ErrorCode.UnknownLevel);
        }
    }

    return description;
}
