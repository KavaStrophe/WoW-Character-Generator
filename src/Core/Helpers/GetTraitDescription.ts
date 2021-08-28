import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { TraitDescriptionDictionary } from "Resources/Dictionaries/TraitDictionaries/TraitDescriptionDictionary";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { TraitDescription } from "Resources/Models/Characters/TraitDescription";

export const GetTraitDescription = (trait: CharacterTrait):TraitDescription => {
    const traitDescription = TraitDescriptionDictionary.get(trait);

    if(!traitDescription){
        throw new PersonalizedError(ErrorCode.UnknownTrait);
    }

    return traitDescription;
}
