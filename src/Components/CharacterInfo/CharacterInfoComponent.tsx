import { CharacterInfo } from "Resources/Models/CharacterInfo";

interface ICharacterInfoComponentParameters {
    characterInfo: CharacterInfo
}

export const CharacterInfoComponent = (params :ICharacterInfoComponentParameters) => {
    return (<>
        <p>Full name: {params.characterInfo.fullName}</p>
        <p>First name: {params.characterInfo.firstName}</p>
        <p>Last name: {params.characterInfo.lastName}</p>
    </>)
}
