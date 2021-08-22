import { IQueryHandler } from "QueryHandlers/IQueryHandler";
import { RaceEnum } from "Resources/Enums/RaceEnum";
import { GetRacesFromExpansionQuery } from "Resources/Models/GetRacesFromExpansionQuery";

export interface IGetRacesFromExpansionQueryHandler extends IQueryHandler<GetRacesFromExpansionQuery, RaceEnum[]>{}
