import { CharacterInfoGeneratorAdapter } from "Core/Adapters/Implementations/GenerateCharacterInfoAdapter";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import SeedRandom from "seed-random";
import { CharacterTableComponent } from "Website/Components/CharacterTableComponent/CharacterTableComponent";

interface CharacterTableContainerParameters {
    seeds: string[];
    buildActions:(seed: string) => JSX.Element[] | undefined;
}

export const CharacterTableContainer = ({seeds, buildActions}:CharacterTableContainerParameters) => {
    const [characters, setCharacters] = useState(new Array<CharacterInfo>());

    useEffect(() => {
        setCharacters(seeds.map((seed) => {
            SeedRandom(seed, {global: true});
            
            const characterInfoAdapter = new CharacterInfoGeneratorAdapter();
            return characterInfoAdapter.Get({seed});
        }));
    }, [seeds])

    return (
        <Table striped bordered hover>
            <CharacterTableComponent characters={characters} buildActions={buildActions}/>
        </Table>
    );
} 
