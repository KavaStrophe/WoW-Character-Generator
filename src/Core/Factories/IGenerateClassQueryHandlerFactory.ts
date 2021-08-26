import { IGenerateClassQueryHandler } from "Core/QueryHandlers/GenerateClassQueryHandler/IGenerateClassQueryHandler";
import { IFactory } from "./IFactory";

export interface IGenerateClassQueryHandlerFactory extends IFactory<void, IGenerateClassQueryHandler> {
    Get(): IGenerateClassQueryHandler;
}
