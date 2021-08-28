import { GetRandomInteger } from "Core/Helpers/GetRandomInteger";
import { CharacterAttributes } from "Resources/Models/Characters/CharacterAttributes";
import { GenerateCharacterAttributesQuery } from "Resources/Models/Queries/GenerateCharacterAttributesQuery";
import { IGetAttributesQueryHandler } from "../IGetAttributesQueryHandler";
import { CHARACTER_ATTRIBUTES_CONFIG } from "Config/CharacterAttributesConfig";
import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeLevels } from "Resources/Lists/Attributes/AttributeLevels";

export class GetAttributesQueryHandler implements IGetAttributesQueryHandler {
    private GetMaxAttributeValue(configMax:number, queryMax:number):number {
        return queryMax < configMax ? queryMax : configMax;
    }
    private GetMinAttributeValue(configMin:number, queryMin:number):number {
        return configMin > queryMin ? configMin : queryMin;
    }

    private ConvertToLevel(level:number):CharacterLevel {
        return AttributeLevels[level];
    }

    Execute(query: GenerateCharacterAttributesQuery): CharacterAttributes {
        const test =  {
            Strength: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.STRENGTH_MAX, query.Strength.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.STRENGTH_MIN, query.Strength.Min))),
                
            Dexterity: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.DEXTERITY_MAX, query.Dexterity.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.DEXTERITY_MIN, query.Dexterity.Min))),
                
            Constitution: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.CONSTITUTION_MAX, query.Constitution.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.CONSTITUTION_MIN, query.Constitution.Min))),
                
            Intelligence: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.INTELLIGENCE_MAX, query.Intelligence.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.INTELLIGENCE_MIN, query.Intelligence.Min))),
                
            Charisma: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.CHARISMA_MAX, query.Charisma.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.CHARISMA_MIN, query.Charisma.Min))),
                
            Wisdom: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.WISDOM_MAX, query.Wisdom.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.WILLPOWER_MIN, query.Wisdom.Min))),
        
            Luck: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.LUCK_MAX, query.Luck.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.LUCK_MIN, query.Luck.Min))),
                
            Perception: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.PERCEPTION_MAX, query.Perception.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.PERCEPTION_MIN, query.Perception.Min))),
                
            WillPower: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.WILLPOWER_MAX, query.WillPower.Max), 
                this.GetMinAttributeValue(CHARACTER_ATTRIBUTES_CONFIG.WILLPOWER_MIN, query.WillPower.Min))),
        }
        console.log(test);
        return test;
    }
}
