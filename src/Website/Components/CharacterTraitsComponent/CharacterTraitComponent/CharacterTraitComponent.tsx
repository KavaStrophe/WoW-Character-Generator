import { GetFormattedTraitDescription } from "Core/Helpers/GetFormattedTraitDescription";
import { GetTraitDescription } from "Core/Helpers/GetTraitDescription";
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
            <p>Trait name: {traitDescription.name}</p>
            <p>Trait description: {description}</p>
        </div>
    )
}
