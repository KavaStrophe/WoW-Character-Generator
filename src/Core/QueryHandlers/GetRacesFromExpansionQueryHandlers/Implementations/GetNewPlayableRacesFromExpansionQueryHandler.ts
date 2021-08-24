import { UnknownExpansionError } from 'Core/Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'Core/QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { GameExpansionEnum } from 'Resources/Enums/GameEnums/GameExpansionEnum';
import { CharacterRaceEnum } from 'Resources/Enums/CharacterEnums/CharacterRaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/Queries/GetRacesFromExpansionQuery';

export class GetNewPlayableRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): CharacterRaceEnum[] {
        switch(query.expansion){
            case GameExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.NewPlayableRaces;
            case GameExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.NewPlayableRaces;
            case GameExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.NewPlayableRaces;
            case GameExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.NewPlayableRaces;
            case GameExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.NewPlayableRaces;
            case GameExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.NewPlayableRaces;
            case GameExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.NewPlayableRaces;
            case GameExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.NewPlayableRaces;
            case GameExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.NewPlayableRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
