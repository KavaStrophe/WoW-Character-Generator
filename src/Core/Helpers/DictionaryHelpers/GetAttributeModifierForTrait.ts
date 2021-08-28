import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { TraitAttributeModifierDictionary } from "Resources/Dictionaries/TraitDictionaries/TraitAttributeModifierDictionary";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { CharacterAttributeModifier } from "Resources/Models/Characters/CharacterAttributeModifier";

export const GetAttributeModifierForTrait = (trait:CharacterTrait):CharacterAttributeModifier => {
    const modifier = TraitAttributeModifierDictionary.get(trait);
    if(!modifier) {
        throw new PersonalizedError(ErrorCode.UnknownTrait)
    }
    return modifier;
}
