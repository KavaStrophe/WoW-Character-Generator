import { GenderNameDictionary } from "Resources/Dictionaries/GenderNameDictionary";
import { RaceNameDictionary } from "Resources/Dictionaries/RaceNameDictionary";
import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import { CharacterAttributesComponent } from "../CharacterAttributesComponent/CharacterAttributesComponent";
import { CharacterTraitsComponent } from "../CharacterTraitsComponent/CharacterTraitsComponent";
import { GenerateButtonComponent } from "../GenerateButtonComponent/GenerateButtonComponent";

interface ICharacterInfoboxComponentParameters {
    characterInfo: CharacterInfo
}

export const CharacterInfoboxComponent = ({characterInfo} :ICharacterInfoboxComponentParameters) => {
    return (<>
        <GenerateButtonComponent />
        <p>Full name: {characterInfo.identity.fullName}</p>
        <p>First name: {characterInfo.identity.firstName}</p>
        <p>
            Last name: {characterInfo.identity.lastName}
        </p>
        <p>Race: {RaceNameDictionary.get(characterInfo.race)}</p>
        <p>Gender: {GenderNameDictionary.get(characterInfo.gender)}</p>
        <p>Class: {characterInfo.characterClass.className}</p>
        <p>Character traits: </p>
        <CharacterTraitsComponent 
            traits={characterInfo.traits} 
            identity={characterInfo.identity} 
            gender={characterInfo.gender} />
        <CharacterAttributesComponent attributes={characterInfo.attributes} />
    </>)
}
