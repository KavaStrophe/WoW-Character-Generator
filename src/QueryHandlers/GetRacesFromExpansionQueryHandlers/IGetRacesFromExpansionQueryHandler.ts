import { IQueryHandler } from "QueryHandlers/IQueryHandler";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { GetRacesFromExpansionQuery } from "Resources/Models/Queries/GetRacesFromExpansionQuery";

export interface IGetRacesFromExpansionQueryHandler extends IQueryHandler<GetRacesFromExpansionQuery, CharacterRaceEnum[]>{}
