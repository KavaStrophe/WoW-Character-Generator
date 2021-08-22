import { RaceEnum } from "Resources/Enums/RaceEnum";
import { GetRacesFromExpansionQuery } from "Resources/Models/GetRacesFromExpansionQuery";
import { IAdapter } from "./IAdapter";

export interface IGetRacesFromExpansionAdapter extends IAdapter<GetRacesFromExpansionQuery, RaceEnum[]>{}
