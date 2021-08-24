import { IGetLatestExpansionAdapter } from "Core/Adapters/IGetLatestExpansionAdapter";
import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";

export class GetLatestExpansionAdapter implements IGetLatestExpansionAdapter {
    Get(params: void): GameExpansionEnum {
        throw new Error("Method not implemented.");
    }
    
}
