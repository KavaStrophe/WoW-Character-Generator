import { CharacterInfoComponent } from 'Website/Components/CharacterInfo/CharacterInfoComponent';
import { CharacterInfoGeneratorAdapter } from 'Core/Adapters/Implementations/GenerateCharacterInfoAdapter';
import { GameRaceType } from 'Resources/Enums/Game/GameRaceType';
import SeedRandom from 'seed-random';

interface HomePageParameters {
    seed:string
}

export const HomePage = ({seed}:HomePageParameters) => {
    SeedRandom(seed, {global: true}); // Override global Random with SeedRandom

    const characterInfoAdapter = new CharacterInfoGeneratorAdapter();
    const characterInfo = characterInfoAdapter.Get({
        preFilledCharacterInfo: {},
        raceType: GameRaceType.AvailableRace
    });
    
    return ( 
        <>
            <CharacterInfoComponent characterInfo={characterInfo}/>
        </>
    )
}
