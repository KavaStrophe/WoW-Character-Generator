import React from 'react';
import { GenerateNameAdapter } from 'Adapters/Implementations/GenerateAdapters';
import { GenderEnum } from 'Resources/Enums/GenderEnum';
import { RaceEnum } from 'Resources/Enums/RaceEnum';
import { GenerateNameQuery } from 'Resources/Models/GenerateNameQuery';
import { CharacterInfoComponent } from 'Components/CharacterInfo/CharacterInfoComponent';
import { CharacterInfoGeneratorAdapter } from 'Adapters/Implementations/GenerateCharacterInfoAdapter';
import { CharacterInfo } from 'Resources/Models/CharacterInfo';
import { ExpansionEnum } from 'Resources/Enums/ExpansionEnum';
import { RaceTypeEnum } from 'Resources/Enums/RaceTypeEnum';

export const HomePage = () => {


    const nameAdapter = new GenerateNameAdapter();
    const characterInfoAdapter = new CharacterInfoGeneratorAdapter();
    const maleName = nameAdapter.Get(new GenerateNameQuery(RaceEnum.Dwarf, GenderEnum.Male));

    const characs1:CharacterInfo = {expansion: ExpansionEnum.ShadowLands ,age:30, fullName: "Rupan Von Launch", race: RaceEnum.Human, gender: GenderEnum.Male, firstName: "Rupan", lastName:"Von"}; 
    const characterInfo = characterInfoAdapter.Get({
        preFilledCharacterInfo: characs1,
        raceType: RaceTypeEnum.AvailableRace
    });
    
    return ( 
        <>
            <p>{maleName}</p>
            <CharacterInfoComponent characterInfo={characterInfo}/>
        </>
    )
}
