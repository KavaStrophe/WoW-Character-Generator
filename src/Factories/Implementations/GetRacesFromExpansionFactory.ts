import { UnknownRaceTypeError } from "Errors/UnknownRaceTypeError";
import { IGetRacesFromExpansionQueryHandlerFactory } from "Factories/IGetRacesFromExpansionQueryHandlerFactory";
import { IGetRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler";
import { GetAvailablePlayableRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetAvailablePlayableRacesFromExpansionQueryHandler";
import { GetAvailableRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetAvailableRacesFromExpansionQueryHandler";
import { GetNewPlayableRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetNewPlayableRacesFromExpansionQueryHandler";
import { GetNewRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/Implementations/GetNewRacesFromExpansionQueryHandler";
import { RaceTypeEnum } from "Resources/Enums/RaceTypeEnum";

export class GetRacesFromExpansionFactory implements IGetRacesFromExpansionQueryHandlerFactory {
    Get(params: RaceTypeEnum): IGetRacesFromExpansionQueryHandler {
        switch(params){
            case RaceTypeEnum.AvailablePlayableRace:
                return new GetAvailablePlayableRacesFromExpansionQueryHandler();
            case RaceTypeEnum.AvailableRace:
                return new GetAvailableRacesFromExpansionQueryHandler();
            case RaceTypeEnum.NewPlayableRace:
                return new GetNewPlayableRacesFromExpansionQueryHandler();
            case RaceTypeEnum.NewRace:
                return new GetNewRacesFromExpansionQueryHandler();
            default:
                throw new UnknownRaceTypeError(params.toString())
        }
    }

}
