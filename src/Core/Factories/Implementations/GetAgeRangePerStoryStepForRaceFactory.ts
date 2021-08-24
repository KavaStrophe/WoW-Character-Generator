import { IGetAgeRangePerStoryStepForRaceFactory } from "Core/Factories/IGetAgeRangePerStoryStepForRaceFactory";
import { IGetAgeRangePerStoryStepForRaceQueryHandler } from "Core/QueryHandlers/GetAgeRangePerStoryStepQueryHandler/IGetAgeRangePerStoryStepForRaceQueryHandler";
import { GetAgeRangePerStoryStepForRaceQueryHandler } from "Core/QueryHandlers/GetAgeRangePerStoryStepQueryHandler/Implementations/GetAgeRangePerStoryStepQueryHandler";

export class GetAgeRangePerStoryStepForRaceFactory implements IGetAgeRangePerStoryStepForRaceFactory {
    Get(): IGetAgeRangePerStoryStepForRaceQueryHandler {
        return new GetAgeRangePerStoryStepForRaceQueryHandler();
    }
    
}
