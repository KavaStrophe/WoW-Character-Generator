import { IGetLatestExpansionFactory } from "Core/Factories/IGetLatestExpansionFactory";
import { IGetLatestExpansionQueryHandler } from "Core/QueryHandlers/GetLatestExpansionQueryHandler/IGetLatestExpansionQueryHandler";
import { GetLatestExpansionQueryHandler } from "Core/QueryHandlers/GetLatestExpansionQueryHandler/Implementations/GetLatestExpansionQueryHandler";

export class GetLatestExpansionFactory implements IGetLatestExpansionFactory {
    Get(): IGetLatestExpansionQueryHandler {
        return new GetLatestExpansionQueryHandler();
    }

}
