import { IGetTraitsQueryHandler } from "Core/QueryHandlers/GetTraitsQueryHandler/IGetTraitsQueryHandler";
import { GetTraitsQueryHandler } from "Core/QueryHandlers/GetTraitsQueryHandler/Implementations/GetTraitsQueryHandler";
import { IGetTraitsQueryHandlerFactory } from "../IGetTraitsQueryHandlerFactory";

export class GetTraitsQueryHandlerFactory implements IGetTraitsQueryHandlerFactory {
    public Get(): IGetTraitsQueryHandler{
        return new GetTraitsQueryHandler();
    }
}
