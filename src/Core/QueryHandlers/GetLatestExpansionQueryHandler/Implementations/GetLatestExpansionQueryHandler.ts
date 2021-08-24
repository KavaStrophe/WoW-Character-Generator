import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";
import { OrderedExpansionList } from "Resources/Lists/OrderedExpansionList";
import { IGetLatestExpansionQueryHandler } from "../IGetLatestExpansionQueryHandler";

export class GetLatestExpansionQueryHandler implements IGetLatestExpansionQueryHandler {
    Execute(): GameExpansionEnum {
        return OrderedExpansionList[OrderedExpansionList.length - 1];
    }
    
}
