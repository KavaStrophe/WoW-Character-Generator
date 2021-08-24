import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { GetRacesFromExpansionQuery } from "Resources/Models/Queries/GetRacesFromExpansionQuery";
import { IGetRacesFromExpansionAdapter } from "Core/Adapters/IGetRacesFromExpansionAdapter";
import { GetRacesFromExpansionFactory } from "Core/Factories/Implementations/GetRacesFromExpansionFactory";

export class GetRacesFromExpansionAdapter implements IGetRacesFromExpansionAdapter {
    Get(params: GetRacesFromExpansionQuery): CharacterRaceEnum[] {
        const queryHandlerFactory = new GetRacesFromExpansionFactory();
        const queryHandler = queryHandlerFactory.Get(params.raceType);
        return queryHandler.Execute(params);
    }
}
