import { IStoryStepAgesForRaceDictionary } from "Resources/Dictionaries/StoryStepAgesForRaceDictionaries/IStoryStepAgesForRaceDictionary";
import { GetStoryStepAgesForRaceQuery } from "Resources/Models/Queries/GetStoryStepAgesForRaceQuery";
import { IAdapter } from "./IAdapter";

export interface IGetStoryStepAgesForRaceAdapter extends IAdapter<GetStoryStepAgesForRaceQuery, IStoryStepAgesForRaceDictionary>{}
