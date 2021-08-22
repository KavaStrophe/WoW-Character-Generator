import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";
import { IAdapter } from "./IAdapter";

export interface IGetLatestExpansionAdapter extends IAdapter<void, GameExpansionEnum>{}
