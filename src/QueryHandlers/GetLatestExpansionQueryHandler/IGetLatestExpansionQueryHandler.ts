import { IQueryHandler } from "QueryHandlers/IQueryHandler";
import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";

export interface IGetLatestExpansionQueryHandler extends IQueryHandler<void, GameExpansionEnum> {} 
