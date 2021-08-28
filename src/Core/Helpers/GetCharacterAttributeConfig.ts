import { CHARACTER_ATTRIBUTES_CONFIG } from "Config/CharacterAttributesConfig";
import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { MinMax } from "Resources/Models/Others/MinMax";

export const GetCharacterAttributeConfig = (attribute: CharacterAttribute):MinMax => {
    switch(attribute){
        case CharacterAttribute.Strength:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.STRENGTH_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.STRENGTH_MIN
            };
        case CharacterAttribute.Constitution:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.CONSTITUTION_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.CONSTITUTION_MIN
            };
        case CharacterAttribute.Dexterity:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.DEXTERITY_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.DEXTERITY_MIN
            };
        case CharacterAttribute.Intelligence:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.INTELLIGENCE_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.INTELLIGENCE_MIN
            };
        case CharacterAttribute.Charisma:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.CHARISMA_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.CHARISMA_MIN
            };
        case CharacterAttribute.Wisdom:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.WISDOM_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.WISDOM_MIN
            };
        case CharacterAttribute.Luck:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.LUCK_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.LUCK_MIN
            };
        case CharacterAttribute.Perception:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.PERCEPTION_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.PERCEPTION_MIN
            };
        case CharacterAttribute.WillPower:
            return {
                Max: CHARACTER_ATTRIBUTES_CONFIG.WILLPOWER_MAX,
                Min: CHARACTER_ATTRIBUTES_CONFIG.WILLPOWER_MIN
            };
        default:
            throw new PersonalizedError(ErrorCode.UnknownAttribute);
    }
}
