import { UnknownExpansionError } from 'Errors/UnknownExpansionError';
import {IGetRacesFromExpansionQueryHandler} from 'QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler'
import { RacesInExpansionsDictionary } from 'Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary';
import { ExpansionEnum } from 'Resources/Enums/ExpansionEnum';
import { RaceEnum } from 'Resources/Enums/RaceEnum';
import { GetRacesFromExpansionQuery } from 'Resources/Models/GetRacesFromExpansionQuery';

export class GetNewPlayableRacesFromExpansionQueryHandler implements IGetRacesFromExpansionQueryHandler {
    Execute(query: GetRacesFromExpansionQuery): RaceEnum[] {
        switch(query.expansion){
            case ExpansionEnum.Vanilla:
                return RacesInExpansionsDictionary.Vanilla.NewPlayableRaces;
            case ExpansionEnum.BurningCrusade:
                return RacesInExpansionsDictionary.BurningCrusade.NewPlayableRaces;
            case ExpansionEnum.WrathOfTheLichKing:
                return RacesInExpansionsDictionary.WrathOfTheLichKing.NewPlayableRaces;
            case ExpansionEnum.Cataclysm:
                return RacesInExpansionsDictionary.Cataclysm.NewPlayableRaces;
            case ExpansionEnum.MistsOfPandaria:
                return RacesInExpansionsDictionary.MistsOfPandaria.NewPlayableRaces;
            case ExpansionEnum.WarlordsOfDraenor:
                return RacesInExpansionsDictionary.WarlordsOfDraenor.NewPlayableRaces;
            case ExpansionEnum.Legion:
                return RacesInExpansionsDictionary.Legion.NewPlayableRaces;
            case ExpansionEnum.BattleForAzeroth:
                return RacesInExpansionsDictionary.BattleForAzeroth.NewPlayableRaces;
            case ExpansionEnum.ShadowLands:
                return RacesInExpansionsDictionary.ShadowLands.NewPlayableRaces;
            default:
                throw new UnknownExpansionError(query.expansion.toString());
        }
    }

}
