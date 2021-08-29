import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import { CharacterTableFooterComponent } from "./CharacterTableFooterComponent/CharacterTableFooterComponent";
import { CharacterTableHeaderComponent } from "./CharacterTableHeaderComponent/CharacterTableHeaderComponent";
import { CharacterTableRowComponent } from "./CharacterTableRowComponent/CharacterTableRowComponent";

interface CharacterTableComponentParameters {
    characters: CharacterInfo[];
    buildActions:(seed: string) => JSX.Element[] | undefined;
}

export const CharacterTableComponent = ({characters, buildActions}:CharacterTableComponentParameters) => {
    return (<>
        <CharacterTableHeaderComponent hasActions={buildActions !== undefined} />
        <tbody>
            {characters.map((character, key) => {
                const actions = buildActions(character.seed);
                return (
                    <CharacterTableRowComponent key={key} character={character} actions={actions}/>
                )
            })}
        </tbody>
        <CharacterTableFooterComponent />
    </>)
}
