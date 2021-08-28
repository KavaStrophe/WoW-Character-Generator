import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import { CharacterAttributesComponent } from "./CharacterAttributesComponent/CharacterAttributesComponent";
import { CharacterCharacteristicsComponent } from "./CharacterCharacteristicsComponent/CharacterCaracteristicsComponent";
import { CharacterIdentityComponent } from "./CharacterIdentityComponent/CharacterIdentityComponent";

interface ICharacterInfoboxComponentParameters {
    characterInfo: CharacterInfo
}

export const CharacterInfoboxComponent = ({characterInfo} :ICharacterInfoboxComponentParameters) => {
    return (
    <div className="row">
        <div className="col-4">
            <CharacterIdentityComponent identity={characterInfo.identity} race={characterInfo.race} gender={characterInfo.gender} characterClass={characterInfo.characterClass}/>
        </div>
        <div className="col-4">
            <CharacterCharacteristicsComponent gender={characterInfo.gender} identity={characterInfo.identity} traits={characterInfo.traits}  />
        </div>
        <div className="col-4">
            <CharacterAttributesComponent attributes={characterInfo.attributes} />
        </div>
    </div>
    )
}
