import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { MinMax } from "Resources/Models/Others/MinMax";
import { GenerateCharacterAttributesQuery } from "Resources/Models/Queries/GenerateCharacterAttributesQuery";
import { GetAttributeModifierForTrait } from "./DictionaryHelpers/GetAttributeModifierForTrait";

const ApplyModifier = (minmax: MinMax, modifier: number):MinMax => {
    if(modifier < 0){
        const newValue = minmax.Max - modifier;

        if(newValue >=  minmax.Min){
            minmax.Max = newValue;
        }
    } else {
        const newValue = minmax.Min + modifier;

        if(newValue <=  minmax.Max){
            minmax.Min = newValue;
        }
    }

    return minmax;
}

export const ApplyTraitModifiersOnCharacterAttribute = (query: GenerateCharacterAttributesQuery, traits: CharacterTrait[]):GenerateCharacterAttributesQuery => {
    traits.forEach((trait) => {
        const modifier = GetAttributeModifierForTrait(trait);
        const attribute = modifier.attribute;

        switch(attribute){
            case CharacterAttribute.Strength:
                query.Strength = ApplyModifier(query.Strength, modifier.modifier);
                break;
            case CharacterAttribute.Dexterity:
                query.Dexterity = ApplyModifier(query.Dexterity, modifier.modifier);
                break;
            case CharacterAttribute.Constitution:
                query.Constitution = ApplyModifier(query.Constitution, modifier.modifier);
                break;
            case CharacterAttribute.Intelligence:
                query.Intelligence = ApplyModifier(query.Intelligence, modifier.modifier);
                break;
            case CharacterAttribute.Charisma:
                query.Charisma = ApplyModifier(query.Charisma, modifier.modifier);
                break;
            case CharacterAttribute.Wisdom:
                query.Wisdom = ApplyModifier(query.Wisdom, modifier.modifier);
                break;
            case CharacterAttribute.Luck:
                query.Luck = ApplyModifier(query.Luck, modifier.modifier);
                break;
            case CharacterAttribute.Perception:
                query.Perception = ApplyModifier(query.Perception, modifier.modifier);
                break;
            case CharacterAttribute.WillPower:
                query.WillPower = ApplyModifier(query.WillPower, modifier.modifier);
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownAttribute);
        }
    });
    
    return query;
}
