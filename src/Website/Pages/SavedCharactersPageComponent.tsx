import { GetPagePathConfigForPageName } from "Core/Helpers/DictionaryHelpers/GetPagePathConfigForPageName";
import { DeleteSavedCharacter } from "Core/Helpers/SaveCharacterHelpers/DeleteSavedCharacter";
import { GetAllSavedCharacters } from "Core/Helpers/SaveCharacterHelpers/GetAllSavedCharacters";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { PageName } from "Resources/Enums/Website/PageName";
import { CharacterTableContainer } from "Website/Containers/CharacterTableContainer";

export const SavedCharactersPageComponent = () => {
    const [seeds, setSeeds] = useState(GetAllSavedCharacters());
    const newCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.RandomCharacter);
    const history = useHistory();

    const viewCharacter = (seed:string) => {
        history.push(`${newCharacterPagePathConfig.path}/${seed}`);
    }

    const deleteCharacter = (seedToDelete:string) => {
        DeleteSavedCharacter(seedToDelete);
        setSeeds(seeds.filter(seed => {return seedToDelete !== seed}));
    }

    const buildActions = (seed:string) => {
        return [
            (<button onClick={() => {viewCharacter(seed)}} className="btn-primary mr-3">View</button>),
            (<button onClick={() => {deleteCharacter(seed)}} className="btn-danger">Delete</button>)
        ]
    }

    return (
        <CharacterTableContainer buildActions={buildActions} seeds={seeds} />
    )
}
