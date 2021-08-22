import { UnknownExpansionError } from 'Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { ExpansionEnum } from 'Resources/Enums/ExpansionEnum';
import { RaceEnum } from 'Resources/Enums/RaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/GetRacesFromExpansionQuery';

export class GetAvailablePlayableRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): RaceEnum[] {
        switch(query.expansion){
            case ExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.AvailablePlayableRaces;
            case ExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.AvailablePlayableRaces;
            case ExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.AvailablePlayableRaces;
            case ExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.AvailablePlayableRaces;
            case ExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.AvailablePlayableRaces;
            case ExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.AvailablePlayableRaces;
            case ExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.AvailablePlayableRaces;
            case ExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.AvailablePlayableRaces;
            case ExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.AvailablePlayableRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
