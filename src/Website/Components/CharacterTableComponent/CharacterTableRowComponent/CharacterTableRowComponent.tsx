import { GetNameForGender } from "Core/Helpers/DictionaryHelpers/GetNameForGender"
import { GetNameForRace } from "Core/Helpers/DictionaryHelpers/GetNameForRace"
import { GetAllWordsInSentenceFirstLetterCapitalized } from "Core/Helpers/TextHelpers/GetAllWordsInSentenceFirstLetterCapitalized"
import { GetStringWithFirstLetterCapitalized } from "Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized"
import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo"

interface CharacterTableRowComponentParameters {
    character: CharacterInfo;
    actions: JSX.Element[] | undefined;
}

export const CharacterTableRowComponent = ({character, actions}:CharacterTableRowComponentParameters) => {
    return (
        <tr>
            <td>{character.identity.fullName}</td>
            <td>{GetAllWordsInSentenceFirstLetterCapitalized(GetNameForRace(character.race))}</td>
            <td>{GetStringWithFirstLetterCapitalized(GetNameForGender(character.gender))}</td>

            {actions !== undefined ? 
                (
                    <td>
                        {actions.map((action, key) => {
                            return (<span key={key}>{action}</span>)
                        })}
                    </td>
                ) : (<></>)
            }
        </tr>
    )
}
