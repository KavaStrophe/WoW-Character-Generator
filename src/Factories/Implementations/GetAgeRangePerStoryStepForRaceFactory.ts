import { IGetAgeRangePerStoryStepForRaceFactory } from "Factories/IGetAgeRangePerStoryStepForRaceFactory";
import { IGetAgeRangePerStoryStepForRaceQueryHandler } from "QueryHandlers/GetAgeRangePerStoryStepQueryHandler/IGetAgeRangePerStoryStepForRaceQueryHandler";
import { GetAgeRangePerStoryStepForRaceQueryHandler } from "QueryHandlers/GetAgeRangePerStoryStepQueryHandler/Implementations/GetAgeRangePerStoryStepQueryHandler";

export class GetAgeRangePerStoryStepForRaceFactory implements IGetAgeRangePerStoryStepForRaceFactory {
    Get(): IGetAgeRangePerStoryStepForRaceQueryHandler {
        return new GetAgeRangePerStoryStepForRaceQueryHandler();
    }
    
}
