import { IQueryHandler } from "Core/QueryHandlers/IQueryHandler";
import { IStoryStepAgesForRaceDictionary } from "Resources/Dictionaries/StoryStepAgesForRaceDictionaries/IStoryStepAgesForRaceDictionary";
import { GetStoryStepAgesForRaceQuery } from "Resources/Models/Queries/GetStoryStepAgesForRaceQuery";

export interface IGetAgeRangePerStoryStepForRaceQueryHandler extends IQueryHandler<GetStoryStepAgesForRaceQuery, IStoryStepAgesForRaceDictionary> {}
