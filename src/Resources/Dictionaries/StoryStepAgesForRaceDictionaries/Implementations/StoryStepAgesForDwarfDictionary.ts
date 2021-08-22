import { IStoryStepAgesForRaceDictionary } from "../IStoryStepAgesForRaceDictionary";
import { STORY_STEP_AGES } from "Config/Constants/StoryStepAges";

export class StoryStepAgesForDwarfDictionary implements IStoryStepAgesForRaceDictionary {
    limitChildhoodAge = STORY_STEP_AGES.LIMIT_CHILDHOOD_AGE_DWARF;
    limitTeenagehoodAge = STORY_STEP_AGES.LIMIT_TEENAGEHOOD_AGE_DWARF;
    limitAdulthoodAge = STORY_STEP_AGES.LIMIT_ADULTHOOD_AGE_DWARF;
    limitSeniorhoodAge = STORY_STEP_AGES.LIMIT_SENIORHOOD_AGE_DWARF;
}
