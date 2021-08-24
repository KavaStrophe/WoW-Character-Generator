import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";

interface ICharacterInfoComponentParameters {
    characterInfo: CharacterInfo
}

export const CharacterInfoComponent = (params :ICharacterInfoComponentParameters) => {
    return (<>
        <p>Full name: {params.characterInfo.identity.fullName}</p>
        <p>First name: {params.characterInfo.identity.firstName}</p>
        <p>Last name: {params.characterInfo.identity.lastName}</p>
    </>)
}
