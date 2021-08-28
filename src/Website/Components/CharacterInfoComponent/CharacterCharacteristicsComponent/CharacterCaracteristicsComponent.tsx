import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";
import { CharacterTraitsComponent } from "Website/Components/CharacterInfoComponent/CharacterCharacteristicsComponent/CharacterTraitsComponent/CharacterTraitsComponent";

interface CharacterCharacteristicsComponentParameters {
    gender: CharacterGender;
    identity: CharacterIdentity;
    traits: CharacterTrait[];
}

export const CharacterCharacteristicsComponent = ({gender, identity, traits}:CharacterCharacteristicsComponentParameters) => {

    return (
        <>
            <CharacterTraitsComponent 
                traits={traits} 
                identity={identity} 
                gender={gender} />
        </>
    )
}
