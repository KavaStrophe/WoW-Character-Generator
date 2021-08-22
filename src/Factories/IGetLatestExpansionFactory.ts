
import { IGetLatestExpansionQueryHandler } from "QueryHandlers/GetLatestExpansionQueryHandler/IGetLatestExpansionQueryHandler";
import { IFactory } from "./IFactory";

export interface IGetLatestExpansionFactory extends IFactory<void, IGetLatestExpansionQueryHandler> {
    Get(): IGetLatestExpansionQueryHandler;
}
