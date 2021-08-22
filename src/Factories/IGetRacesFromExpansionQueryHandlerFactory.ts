import { IGetRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler";
import { RaceTypeEnum } from "Resources/Enums/RaceTypeEnum";
import { IFactory } from "./IFactory";

export interface IGetRacesFromExpansionQueryHandlerFactory extends IFactory<RaceTypeEnum, IGetRacesFromExpansionQueryHandler> {
    Get(params: RaceTypeEnum): IGetRacesFromExpansionQueryHandler;
}
