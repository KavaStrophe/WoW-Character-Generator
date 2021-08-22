import { IGetRacesFromExpansionQueryHandler } from "QueryHandlers/GetRacesFromExpansionQueryHandlers/IGetRacesFromExpansionQueryHandler";
import { GameRaceTypeEnum } from "Resources/Enums/GameEnums/GameRaceTypeEnum";
import { IFactory } from "./IFactory";

export interface IGetRacesFromExpansionQueryHandlerFactory extends IFactory<GameRaceTypeEnum, IGetRacesFromExpansionQueryHandler> {
    Get(params: GameRaceTypeEnum): IGetRacesFromExpansionQueryHandler;
}
