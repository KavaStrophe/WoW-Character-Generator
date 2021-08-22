import { UnknownExpansionError } from 'Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { ExpansionEnum } from 'Resources/Enums/ExpansionEnum';
import { RaceEnum } from 'Resources/Enums/RaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/GetRacesFromExpansionQuery';

export class GetNewRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): RaceEnum[] {
        switch(query.expansion){
            case ExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.NewRaces;
            case ExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.NewRaces;
            case ExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.NewRaces;
            case ExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.NewRaces;
            case ExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.NewRaces;
            case ExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.NewRaces;
            case ExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.NewRaces;
            case ExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.NewRaces;
            case ExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.NewRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
