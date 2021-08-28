import { CHARACTER_ATTRIBUTES_CONFIG } from "Config/CharacterAttributesConfig";
import { GenerateCharacterAttributesQuery } from "Resources/Models/Queries/GenerateCharacterAttributesQuery";
import { IGenerateCharacterAttributesQueryFactory } from "../IGenerateCharacterAttributesQueryFactory";

export class GenerateCharacterAttributesQueryFactory implements IGenerateCharacterAttributesQueryFactory {
    Get(): GenerateCharacterAttributesQuery {
        return  {
            Strength: {Min: CHARACTER_ATTRIBUTES_CONFIG.STRENGTH_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.STRENGTH_MAX},
            Dexterity: {Min: CHARACTER_ATTRIBUTES_CONFIG.DEXTERITY_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.DEXTERITY_MAX},
            Constitution: {Min: CHARACTER_ATTRIBUTES_CONFIG.CONSTITUTION_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.CONSTITUTION_MAX},
            Intelligence: {Min: CHARACTER_ATTRIBUTES_CONFIG.INTELLIGENCE_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.INTELLIGENCE_MAX},
            Charisma: {Min: CHARACTER_ATTRIBUTES_CONFIG.CHARISMA_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.CHARISMA_MAX},
            Wisdom: {Min: CHARACTER_ATTRIBUTES_CONFIG.WISDOM_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.WISDOM_MAX},
            Luck: {Min: CHARACTER_ATTRIBUTES_CONFIG.LUCK_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.LUCK_MAX},
            Perception: {Min: CHARACTER_ATTRIBUTES_CONFIG.PERCEPTION_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.PERCEPTION_MAX},
            WillPower: {Min: CHARACTER_ATTRIBUTES_CONFIG.WILLPOWER_MIN, Max: CHARACTER_ATTRIBUTES_CONFIG.WILLPOWER_MAX},
        };
    }
    
}
