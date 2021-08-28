import { GetCharacterAttributeConfig } from "Core/Helpers/GetCharacterAttributeConfig";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { GenerateCharacterAttributesQuery } from "Resources/Models/Queries/GenerateCharacterAttributesQuery";
import { IGenerateCharacterAttributesQueryFactory } from "../IGenerateCharacterAttributesQueryFactory";

export class GenerateCharacterAttributesQueryFactory implements IGenerateCharacterAttributesQueryFactory {
    Get(): GenerateCharacterAttributesQuery {
        return  {
            Strength: GetCharacterAttributeConfig(CharacterAttribute.Strength),
            Dexterity: GetCharacterAttributeConfig(CharacterAttribute.Dexterity),
            Constitution: GetCharacterAttributeConfig(CharacterAttribute.Constitution),
            Intelligence: GetCharacterAttributeConfig(CharacterAttribute.Intelligence),
            Charisma: GetCharacterAttributeConfig(CharacterAttribute.Charisma),
            Wisdom: GetCharacterAttributeConfig(CharacterAttribute.Wisdom),
            Luck: GetCharacterAttributeConfig(CharacterAttribute.Luck),
            Perception: GetCharacterAttributeConfig(CharacterAttribute.Perception),
            WillPower: GetCharacterAttributeConfig(CharacterAttribute.WillPower),
        };
    }
    
}
