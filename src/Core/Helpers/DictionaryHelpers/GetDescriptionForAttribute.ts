import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { AttributeDescriptionDictionary } from "Resources/Dictionaries/AttributeDescriptionDictionary";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const GetDescriptionForAttribute = (attribute: CharacterAttribute): AttributeDescription => {
    const description = AttributeDescriptionDictionary.get(attribute);
    if(!description){
        throw new PersonalizedError(ErrorCode.UnknownAttribute);
    }

    return description;
}
