import {  IGetStoryStepAgesForRaceAdapter } from "Adapters/IGetStoryStepAgesForRaceAdapter";
import { GetAgeRangePerStoryStepForRaceFactory } from "Factories/Implementations/GetAgeRangePerStoryStepForRaceFactory";
import { IStoryStepAgesForRaceDictionary } from "Resources/Dictionaries/StoryStepAgesForRaceDictionaries/IStoryStepAgesForRaceDictionary";
import { GetStoryStepAgesForRaceQuery } from "Resources/Models/Queries/GetStoryStepAgesForRaceQuery";

export class GetStoryStepAgesForRaceAdapter implements IGetStoryStepAgesForRaceAdapter {
    Get(params: GetStoryStepAgesForRaceQuery): IStoryStepAgesForRaceDictionary {
        const factory = new GetAgeRangePerStoryStepForRaceFactory();
        const queryHandler = factory.Get();
        return queryHandler.Execute(params);
    }
    
}
