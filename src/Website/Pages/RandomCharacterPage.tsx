import { CharacterInfoboxComponent } from 'Website/Components/CharacterInfoComponent/CharacterInfoboxComponent';
import { CharacterInfoGeneratorAdapter } from 'Core/Adapters/Implementations/GenerateCharacterInfoAdapter';
import SeedRandom from 'seed-random';
import { RedirectToRandomCharacterPageComponent } from 'Website/Components/RedirectComponents/RedirectToRandomCharacterPageComponent';

interface RandomCharacterPageParameters {
    seed?:string
}

export const RandomCharacterPage = ({seed}:RandomCharacterPageParameters) => {
    if(!seed)
        return (<RedirectToRandomCharacterPageComponent />);

    SeedRandom(seed, {global: true}); // Override global Random with SeedRandom

    const characterInfoAdapter = new CharacterInfoGeneratorAdapter();
    const characterInfo = characterInfoAdapter.Get({});
    
    return ( 
        <>
            <CharacterInfoboxComponent characterInfo={characterInfo}/>
        </>
    )
}
