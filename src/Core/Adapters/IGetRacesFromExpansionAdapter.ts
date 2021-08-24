import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { GetRacesFromExpansionQuery } from "Resources/Models/Queries/GetRacesFromExpansionQuery";
import { IAdapter } from "./IAdapter";

export interface IGetRacesFromExpansionAdapter extends IAdapter<GetRacesFromExpansionQuery, CharacterRaceEnum[]>{}
