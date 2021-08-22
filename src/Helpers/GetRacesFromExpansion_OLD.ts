import { GetLatestExpansionFactory } from "Factories/Implementations/GetLatestExpansionFactory";
import { RacesInExpansionsDictionary } from "Resources/Dictionaries/RaceInExpansionDictionaries/Implementations/RacesInExpansionsDictionary";
import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";

const getLatestExpansion = ():GameExpansionEnum =>  {
    const factory = new GetLatestExpansionFactory();
    const queryHandler = factory.Get();
    return queryHandler.Execute();
}

export const GetNewPlayableRacesFromExpansion = (expansion: GameExpansionEnum):CharacterRaceEnum[] => {
    switch(expansion){
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
            return GetNewPlayableRacesFromExpansion(getLatestExpansion());
    }
}


export const GetNewRacesFromExpansion = (expansion: GameExpansionEnum):CharacterRaceEnum[] => {
    switch(expansion){
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
            return GetNewRacesFromExpansion(getLatestExpansion());
    }
}

export const GetAvailableRacesFromExpansion = (expansion: GameExpansionEnum):CharacterRaceEnum[] =>  {
    switch(expansion){
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
            return GetAvailableRacesFromExpansion(getLatestExpansion());
    }
}

export const GetAvailablePlayableRacesFromExpansion = (expansion: GameExpansionEnum):CharacterRaceEnum[] =>  {
    switch(expansion){
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
            return GetAvailablePlayableRacesFromExpansion(getLatestExpansion());
    }
}
