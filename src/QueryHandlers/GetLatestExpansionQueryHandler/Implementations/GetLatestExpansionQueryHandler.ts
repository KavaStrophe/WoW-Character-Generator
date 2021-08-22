import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";
import { OrderedExpansionList } from "Resources/Lists/OrderedExpansionList";
import { IGetLatestExpansionQueryHandler } from "../IGetLatestExpansionQueryHandler";

export class GetLatestExpansionQueryHandler implements IGetLatestExpansionQueryHandler {
    Execute(): ExpansionEnum {
        return OrderedExpansionList[OrderedExpansionList.length - 1];
    }
    
}
