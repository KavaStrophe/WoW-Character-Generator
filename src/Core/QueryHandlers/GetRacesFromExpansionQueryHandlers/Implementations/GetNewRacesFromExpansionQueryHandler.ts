import { UnknownExpansionError } from 'Core/Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'Core/QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { GameExpansionEnum } from 'Resources/Enums/GameEnums/GameExpansionEnum';
import { CharacterRaceEnum } from 'Resources/Enums/CharacterEnums/CharacterRaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/Queries/GetRacesFromExpansionQuery';

export class GetNewRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): CharacterRaceEnum[] {
        switch(query.expansion){
            case GameExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.NewRaces;
            case GameExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.NewRaces;
            case GameExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.NewRaces;
            case GameExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.NewRaces;
            case GameExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.NewRaces;
            case GameExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.NewRaces;
            case GameExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.NewRaces;
            case GameExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.NewRaces;
            case GameExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.NewRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
