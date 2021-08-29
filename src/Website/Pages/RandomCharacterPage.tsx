import { CharacterInfoboxComponent } from 'Website/Components/CharacterInfoComponent/CharacterInfoboxComponent';
import { CharacterInfoGeneratorAdapter } from 'Core/Adapters/Implementations/GenerateCharacterInfoAdapter';
import SeedRandom from 'seed-random';
import { IsSavedCharacter } from 'Core/Helpers/SaveCharacterHelpers/IsSavedCharacter';
import { useState } from 'react';
import { AddSavedCharacter } from 'Core/Helpers/SaveCharacterHelpers/AddSavedCharacter';
import { DeleteSavedCharacter } from 'Core/Helpers/SaveCharacterHelpers/DeleteSavedCharacter';
import { Col, Row } from 'react-bootstrap';

interface RandomCharacterPageParameters {
    seed:string
}

export const RandomCharacterPage = ({seed}:RandomCharacterPageParameters) => {
    const [isCharacterSaved, setIsCharacterSaved] = useState(IsSavedCharacter(seed));
    SeedRandom(seed, {global: true}); // Override global Random with SeedRandom

    const characterInfoAdapter = new CharacterInfoGeneratorAdapter();
    const characterInfo = characterInfoAdapter.Get({seed});
    
    const saveCharacter = () => {
        AddSavedCharacter(seed);
        setIsCharacterSaved(true);
    }
    
    const deleteCharacter = () => {
        DeleteSavedCharacter(seed);
        setIsCharacterSaved(false);
    }
    
    return ( 
        <>
            <CharacterInfoboxComponent characterInfo={characterInfo}/>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <button onClick={() => {saveCharacter()}} className={"btn-primary btn-block " + (isCharacterSaved ? "d-none" : "")}>Save</button>
                    <button onClick={() => {deleteCharacter()}} className={"btn-danger mt-0 btn-block " + (isCharacterSaved ? "" : "d-none")}>Delete</button>
                </Col>
            </Row>
        </>
    )
}
