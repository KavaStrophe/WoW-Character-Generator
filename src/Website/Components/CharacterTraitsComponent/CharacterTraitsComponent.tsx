import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";
import { CharacterTraitComponent } from "./CharacterTraitComponent/CharacterTraitComponent";

interface CharacterTraitsComponentParameters {
    traits: CharacterTrait[],
    identity: CharacterIdentity,
    gender: CharacterGender
}

export const CharacterTraitsComponent = ({traits, identity, gender}:CharacterTraitsComponentParameters) => {
    return (
        <>
            { traits.map((trait, key) => <CharacterTraitComponent key={key} trait={trait} identity={identity} gender={gender} />) }
        </>
    )
}
