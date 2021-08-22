import { UnknownExpansionError } from 'Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { GameExpansionEnum } from 'Resources/Enums/GameEnums/GameExpansionEnum';
import { CharacterRaceEnum } from 'Resources/Enums/CharacterEnums/CharacterRaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/Queries/GetRacesFromExpansionQuery';

export class GetAvailableRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): CharacterRaceEnum[] {
        switch(query.expansion){
            case GameExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.AvailableRaces;
            case GameExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.AvailableRaces;
            case GameExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.AvailableRaces;
            case GameExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.AvailableRaces;
            case GameExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.AvailableRaces;
            case GameExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.AvailableRaces;
            case GameExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.AvailableRaces;
            case GameExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.AvailableRaces;
            case GameExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.AvailableRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
