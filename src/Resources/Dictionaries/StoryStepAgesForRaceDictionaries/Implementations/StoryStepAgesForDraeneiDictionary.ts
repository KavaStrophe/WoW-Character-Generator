import { IStoryStepAgesForRaceDictionary } from "../IStoryStepAgesForRaceDictionary";
import { STORY_STEP_AGES } from "Config/Constants/StoryStepAges";

export class StoryStepAgesForDraeneiDictionary implements IStoryStepAgesForRaceDictionary {
    limitChildhoodAge = STORY_STEP_AGES.LIMIT_CHILDHOOD_AGE_DRAENEI;
    limitTeenagehoodAge = STORY_STEP_AGES.LIMIT_TEENAGEHOOD_AGE_DRAENEI;
    limitAdulthoodAge = STORY_STEP_AGES.LIMIT_ADULTHOOD_AGE_DRAENEI;
    limitSeniorhoodAge = STORY_STEP_AGES.LIMIT_SENIORHOOD_AGE_DRAENEI;
}
