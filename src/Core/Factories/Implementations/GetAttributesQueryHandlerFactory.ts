import { IGetAttributesQueryHandler } from "Core/QueryHandlers/GetAttributesQueryHandler/IGetAttributesQueryHandler";
import { GetAttributesQueryHandler } from "Core/QueryHandlers/GetAttributesQueryHandler/Implementations/GetAttributesQueryHandler";
import { IGetAttributesQueryHandlerFactory } from "../IGetAttributesQueryHandlerFactory";

export class GetAttributesQueryHandlerFactory implements IGetAttributesQueryHandlerFactory {
    Get(): IGetAttributesQueryHandler {
        return new GetAttributesQueryHandler();
    }
}
