import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { GameRaceType } from "Resources/Enums/Game/GameRaceType";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { RacesInExpansion } from "Resources/Models/Game/RacesInExpansion";

export const GetRacesOfRaceTypeFromRacesInExpansion = (races: RacesInExpansion, raceType:GameRaceType):CharacterRace[] => {
    switch(raceType) {
        case GameRaceType.NotSpecified:
        case GameRaceType.AvailableRace:
            return races.availableRaces;
        case GameRaceType.AvailablePlayableRace:
            return races.availablePlayableRaces;
        case GameRaceType.NewPlayableRace:
            return races.newPlayableRaces;
        case GameRaceType.NewRace:
            return races.newRaces;
        default:
            throw new PersonalizedError(ErrorCode.UnknownRaceType);
    }
}
