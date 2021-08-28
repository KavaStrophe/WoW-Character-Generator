import { IGetAttributesQueryHandler } from "Core/QueryHandlers/GetAttributesQueryHandler/IGetAttributesQueryHandler";
import { IFactory } from "./IFactory";

export interface IGetAttributesQueryHandlerFactory extends IFactory<void, IGetAttributesQueryHandler> {
    Get(): IGetAttributesQueryHandler;
}
