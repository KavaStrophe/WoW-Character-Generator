import { UnknownExpansionError } from 'Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { ExpansionEnum } from 'Resources/Enums/ExpansionEnum';
import { RaceEnum } from 'Resources/Enums/RaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/GetRacesFromExpansionQuery';

export class GetAvailableRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): RaceEnum[] {
        switch(query.expansion){
            case ExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.AvailableRaces;
            case ExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.AvailableRaces;
            case ExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.AvailableRaces;
            case ExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.AvailableRaces;
            case ExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.AvailableRaces;
            case ExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.AvailableRaces;
            case ExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.AvailableRaces;
            case ExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.AvailableRaces;
            case ExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.AvailableRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
