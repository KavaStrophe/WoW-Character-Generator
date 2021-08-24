import React from 'react';
import { GenerateNameAdapter } from 'Core/Adapters/Implementations/GenerateNameAdapter';
import { CharacterGenderEnum } from 'Resources/Enums/CharacterEnums/CharacterGenderEnum';
import { CharacterRaceEnum } from 'Resources/Enums/CharacterEnums/CharacterRaceEnum';
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { CharacterInfoComponent } from 'Components/CharacterInfo/CharacterInfoComponent';
import { CharacterInfoGeneratorAdapter } from 'Core/Adapters/Implementations/GenerateCharacterInfoAdapter';
import { GameRaceTypeEnum } from 'Resources/Enums/GameEnums/GameRaceTypeEnum';
import { AgeRangeComponent } from 'Components/AgeRanges/AgeRangesComponent';
import { CharacterStoryStepEnum } from 'Resources/Enums/CharacterEnums/CharacterStoryStepEnum';

export const HomePage = () => {


    const nameAdapter = new GenerateNameAdapter();
    const characterInfoAdapter = new CharacterInfoGeneratorAdapter();
    const maleName = nameAdapter.Get(new GenerateNameQuery(CharacterRaceEnum.Dwarf, CharacterGenderEnum.Male));

    const characterInfo = characterInfoAdapter.Get({
        preFilledCharacterInfo: {},
        raceType: GameRaceTypeEnum.AvailableRace
    });
    
    const onChange = (step: CharacterStoryStepEnum) => {
        console.log(step)
    }

    return ( 
        <>
            <p>{maleName.fullName}</p>
            <CharacterInfoComponent characterInfo={characterInfo}/>
            <AgeRangeComponent race={CharacterRaceEnum.Dwarf} onChange={onChange}/>
        </>
    )
}
