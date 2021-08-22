import { IQueryHandler } from "QueryHandlers/IQueryHandler";
import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";

export interface IGetLatestExpansionQueryHandler extends IQueryHandler<void, ExpansionEnum> {} 
