import { ExpansionOrderDictionary } from "Resources/Dictionaries/ExpansionOrderDictionary/ExpansionOrderDictionary";
import { RacesInExpansionsDictionary } from "Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary";
import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";
import { RaceEnum } from "Resources/Enums/RaceEnum";

export const GetNewPlayableRacesFromExpansion = (expansion: ExpansionEnum):RaceEnum[] => {
    switch(expansion){
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
            return GetNewPlayableRacesFromExpansion(ExpansionOrderDictionary.GetLatestExpansion());
    }
}


export const GetNewRacesFromExpansion = (expansion: ExpansionEnum):RaceEnum[] => {
    switch(expansion){
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
            return GetNewRacesFromExpansion(ExpansionOrderDictionary.GetLatestExpansion());
    }
}

export const GetAvailableRacesFromExpansion = (expansion: ExpansionEnum):RaceEnum[] =>  {
    switch(expansion){
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
            return GetAvailableRacesFromExpansion(ExpansionOrderDictionary.GetLatestExpansion());
    }
}

export const GetAvailablePlayableRacesFromExpansion = (expansion: ExpansionEnum):RaceEnum[] =>  {
    switch(expansion){
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
            return GetAvailablePlayableRacesFromExpansion(ExpansionOrderDictionary.GetLatestExpansion());
    }
}
