import { IGetLatestExpansionAdapter } from "Adapters/IGetLatestExpansionAdapter";
import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";

export class GetLatestExpansionAdapter implements IGetLatestExpansionAdapter {
    Get(params: void): ExpansionEnum {
        throw new Error("Method not implemented.");
    }
    
}
