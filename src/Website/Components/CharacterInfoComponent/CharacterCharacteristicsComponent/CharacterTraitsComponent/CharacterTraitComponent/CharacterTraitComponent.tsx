import { GetTraitDescription } from "Core/Helpers/DictionaryHelpers/GetTraitDescription";
import { GetAllWordsInSentenceFirstLetterCapitalized } from "Core/Helpers/TextHelpers/GetAllWordsInSentenceFirstLetterCapitalized";
import { GetFormattedTraitDescription } from "Core/Helpers/TextHelpers/GetFormattedTraitDescription";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";

interface CharacterTraitComponentParameters {
    trait: CharacterTrait;
    identity: CharacterIdentity;
    gender: CharacterGender;
}

export const CharacterTraitComponent = ({trait, identity, gender}: CharacterTraitComponentParameters) => {
    const traitDescription = GetTraitDescription(trait);
    const description = GetFormattedTraitDescription(traitDescription.description, identity, gender);

    return (
        <div>
            <p className="font-weight-bold mb-2">{GetAllWordsInSentenceFirstLetterCapitalized(traitDescription.name)}</p>
            <p className="mb-4">{description}</p>
        </div>
    )
}
