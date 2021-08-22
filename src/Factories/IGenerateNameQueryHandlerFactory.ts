import { IGenerateNameQueryHandler } from "QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler";
import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IFactory } from "./IFactory";

export interface IGenerateNameQueryHandlerFactory extends IFactory<RaceEnum, IGenerateNameQueryHandler> {
    Get(params: RaceEnum): IGenerateNameQueryHandler;
}
