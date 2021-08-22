
import { IGetAgeRangePerStoryStepForRaceQueryHandler } from "QueryHandlers/GetAgeRangePerStoryStepQueryHandler/IGetAgeRangePerStoryStepForRaceQueryHandler";
import { IFactory } from "./IFactory";

export interface IGetAgeRangePerStoryStepForRaceFactory extends IFactory<void, IGetAgeRangePerStoryStepForRaceQueryHandler> {
    Get(): IGetAgeRangePerStoryStepForRaceQueryHandler;
}
