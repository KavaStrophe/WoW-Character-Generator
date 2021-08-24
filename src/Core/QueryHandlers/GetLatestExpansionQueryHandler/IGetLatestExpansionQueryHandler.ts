import { IQueryHandler } from "Core/QueryHandlers/IQueryHandler";
import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";

export interface IGetLatestExpansionQueryHandler extends IQueryHandler<void, GameExpansionEnum> {} 
