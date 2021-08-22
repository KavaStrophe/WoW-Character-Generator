import { RaceEnum } from "Resources/Enums/RaceEnum";
import { GetRacesFromExpansionQuery } from "Resources/Models/GetRacesFromExpansionQuery";
import { IGetRacesFromExpansionAdapter } from "Adapters/IGetRacesFromExpansionAdapter";
import { GetRacesFromExpansionFactory } from "Factories/Implementations/GetRacesFromExpansionFactory";

export class GetRacesFromExpansionAdapter implements IGetRacesFromExpansionAdapter {
    Get(params: GetRacesFromExpansionQuery): RaceEnum[] {
        const queryHandlerFactory = new GetRacesFromExpansionFactory();
        const queryHandler = queryHandlerFactory.Get(params.raceType);
        return queryHandler.Execute(params);
    }
}
