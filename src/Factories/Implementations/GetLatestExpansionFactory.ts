import { IGetLatestExpansionFactory } from "Factories/IGetLatestExpansionFactory";
import { IGetLatestExpansionQueryHandler } from "QueryHandlers/GetLatestExpansionQueryHandler/IGetLatestExpansionQueryHandler";
import { GetLatestExpansionQueryHandler } from "QueryHandlers/GetLatestExpansionQueryHandler/Implementations/GetLatestExpansionQueryHandler";

export class GetLatestExpansionFactory implements IGetLatestExpansionFactory {
    Get(): IGetLatestExpansionQueryHandler {
        return new GetLatestExpansionQueryHandler();
    }

}
