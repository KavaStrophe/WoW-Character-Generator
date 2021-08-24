import { GenerateNameAdapter } from 'Core/Adapters/Implementations/GenerateNameAdapter';
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender';
import { CharacterRace } from 'Resources/Enums/Character/CharacterRace';
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { CharacterInfoComponent } from 'Website/Components/CharacterInfo/CharacterInfoComponent';
import { CharacterInfoGeneratorAdapter } from 'Core/Adapters/Implementations/GenerateCharacterInfoAdapter';
import { GameRaceType } from 'Resources/Enums/Game/GameRaceType';
import { AgeRangeComponent } from 'Website/Components/AgeRanges/AgeRangesComponent';
import { CharacterStoryStep } from 'Resources/Enums/Character/CharacterStoryStep';

export const HomePage = () => {


    const nameAdapter = new GenerateNameAdapter();
    const characterInfoAdapter = new CharacterInfoGeneratorAdapter();
    const maleName = nameAdapter.Get(new GenerateNameQuery(CharacterRace.Dwarf, CharacterGender.Male));

    const characterInfo = characterInfoAdapter.Get({
        preFilledCharacterInfo: {},
        raceType: GameRaceType.AvailableRace
    });
    
    const onChange = (step: CharacterStoryStep) => {
        console.log(step)
    }

    return ( 
        <>
            <p>{maleName.fullName}</p>
            <CharacterInfoComponent characterInfo={characterInfo}/>
            <AgeRangeComponent race={CharacterRace.Dwarf} onChange={onChange}/>
        </>
    )
}
