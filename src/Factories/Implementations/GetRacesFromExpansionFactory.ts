import { UnknownRaceTypeError } from "Errors/UnknownRaceTypeError";
import { IGetRacesFromExpansionQueryHandlerFactory } from "Factories/IGetRacesFromExpansionQueryHandlerFactory";
import { IGetRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler";
import { GetAvailablePlayableRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetAvailablePlayableRacesFromExpansionQueryHandler";
import { GetAvailableRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetAvailableRacesFromExpansionQueryHandler";
import { GetNewPlayableRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetNewPlayableRacesFromExpansionQueryHandler";
import { GetNewRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetNewRacesFromExpansionQueryHandler";
import { GameRaceTypeEnum } from "Resources/Enums/GameEnums/GameRaceTypeEnum";

export class GetRacesFromExpansionFactory implements IGetRacesFromExpansionQueryHandlerFactory {
    Get(params: GameRaceTypeEnum): IGetRacesFromExpansionQueryHandler {
        switch(params){
            case GameRaceTypeEnum.AvailablePlayableRace:
                return new GetAvailablePlayableRacesFromExpansionQueryHandler();
            case GameRaceTypeEnum.AvailableRace:
                return new GetAvailableRacesFromExpansionQueryHandler();
            case GameRaceTypeEnum.NewPlayableRace:
                return new GetNewPlayableRacesFromExpansionQueryHandler();
            case GameRaceTypeEnum.NewRace:
                return new GetNewRacesFromExpansionQueryHandler();
            default:
                throw new UnknownRaceTypeError(params.toString())
        }
    }

}
