import { IGetTraitsQueryHandler } from "Core/QueryHandlers/GetTraitsQueryHandler/IGetTraitsQueryHandler";
import { IFactory } from "./IFactory";

export interface IGetTraitsQueryHandlerFactory extends IFactory<void, IGetTraitsQueryHandler> {
    Get(): IGetTraitsQueryHandler;
}
