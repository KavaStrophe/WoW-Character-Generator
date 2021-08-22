import { UnknownExpansionError } from 'Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { GameExpansionEnum } from 'Resources/Enums/GameEnums/GameExpansionEnum';
import { CharacterRaceEnum } from 'Resources/Enums/CharacterEnums/CharacterRaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/Queries/GetRacesFromExpansionQuery';

export class GetAvailablePlayableRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): CharacterRaceEnum[] {
        switch(query.expansion){
            case GameExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.AvailablePlayableRaces;
            case GameExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.AvailablePlayableRaces;
            case GameExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.AvailablePlayableRaces;
            case GameExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.AvailablePlayableRaces;
            case GameExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.AvailablePlayableRaces;
            case GameExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.AvailablePlayableRaces;
            case GameExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.AvailablePlayableRaces;
            case GameExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.AvailablePlayableRaces;
            case GameExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.AvailablePlayableRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
