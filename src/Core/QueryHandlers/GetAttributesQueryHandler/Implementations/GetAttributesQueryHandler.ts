import { GetRandomInteger } from "Core/Helpers/GetRandomInteger";
import { CharacterAttributes } from "Resources/Models/Characters/CharacterAttributes";
import { GenerateCharacterAttributesQuery } from "Resources/Models/Queries/GenerateCharacterAttributesQuery";
import { IGetAttributesQueryHandler } from "../IGetAttributesQueryHandler";
import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeLevels } from "Resources/Lists/Attributes/AttributeLevels";
import { GetCharacterAttributeConfig } from "Core/Helpers/GetCharacterAttributeConfig";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";

export class GetAttributesQueryHandler implements IGetAttributesQueryHandler {
    private GetMaxAttributeValue(configMax:number, queryMax:number):number {
        return queryMax < configMax ? queryMax : configMax;
    }
    private GetMinAttributeValue(configMin:number, queryMin:number):number {
        return configMin > queryMin ? configMin : queryMin;
    }

    private ConvertToLevel(level:number):CharacterLevel {
        if(level > AttributeLevels.length - 1){
            throw new PersonalizedError(ErrorCode.UnknownLevel);
        }
        
        return AttributeLevels[level];
    }

    Execute(query: GenerateCharacterAttributesQuery): CharacterAttributes {
        const strengthAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Strength);
        const dexterityAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Dexterity);
        const constitutionAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Constitution);
        const intelligenceAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Intelligence);
        const charismaAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Charisma);
        const wisdomAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Wisdom);
        const luckAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Luck);
        const perceptionAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.Perception);
        const willPowerAttributeConfig = GetCharacterAttributeConfig(CharacterAttribute.WillPower);

        return  {
            Strength: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(strengthAttributeConfig.Max, query.Strength.Max), 
                this.GetMinAttributeValue(strengthAttributeConfig.Min, query.Strength.Min))),
                
            Dexterity: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(dexterityAttributeConfig.Max, query.Dexterity.Max), 
                this.GetMinAttributeValue(dexterityAttributeConfig.Min, query.Dexterity.Min))),
                
            Constitution: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(constitutionAttributeConfig.Max, query.Constitution.Max), 
                this.GetMinAttributeValue(constitutionAttributeConfig.Min, query.Constitution.Min))),
                
            Intelligence: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(intelligenceAttributeConfig.Max, query.Intelligence.Max), 
                this.GetMinAttributeValue(intelligenceAttributeConfig.Min, query.Intelligence.Min))),
                
            Charisma: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(charismaAttributeConfig.Max, query.Charisma.Max), 
                this.GetMinAttributeValue(charismaAttributeConfig.Min, query.Charisma.Min))),
                
            Wisdom: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(wisdomAttributeConfig.Max, query.Wisdom.Max), 
                this.GetMinAttributeValue(wisdomAttributeConfig.Min, query.Wisdom.Min))),
        
            Luck: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(luckAttributeConfig.Max, query.Luck.Max), 
                this.GetMinAttributeValue(luckAttributeConfig.Min, query.Luck.Min))),
                
            Perception: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(perceptionAttributeConfig.Max, query.Perception.Max), 
                this.GetMinAttributeValue(perceptionAttributeConfig.Min, query.Perception.Min))),
                
            WillPower: this.ConvertToLevel(GetRandomInteger(
                this.GetMaxAttributeValue(willPowerAttributeConfig.Max, query.WillPower.Max), 
                this.GetMinAttributeValue(willPowerAttributeConfig.Min, query.WillPower.Min))),
        };
    }
}
