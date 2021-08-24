import { UnknownRaceError } from "Core/Errors/UnknownRaceError";
import { StoryStepAgesForDraeneiDictionary } from "Resources/Dictionaries/StoryStepAgesForRaceDictionaries/Implementations/StoryStepAgesForDraeneiDictionary";
import { StoryStepAgesForDwarfDictionary } from "Resources/Dictionaries/StoryStepAgesForRaceDictionaries/Implementations/StoryStepAgesForDwarfDictionary";
import { IStoryStepAgesForRaceDictionary } from "Resources/Dictionaries/StoryStepAgesForRaceDictionaries/IStoryStepAgesForRaceDictionary";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { GetStoryStepAgesForRaceQuery } from "Resources/Models/Queries/GetStoryStepAgesForRaceQuery";
import { IGetAgeRangePerStoryStepForRaceQueryHandler } from "../IGetAgeRangePerStoryStepForRaceQueryHandler";

export class GetAgeRangePerStoryStepForRaceQueryHandler implements IGetAgeRangePerStoryStepForRaceQueryHandler {
    Execute(query: GetStoryStepAgesForRaceQuery): IStoryStepAgesForRaceDictionary {
        switch(query.race){
            case CharacterRaceEnum.Draenei:
                return new StoryStepAgesForDraeneiDictionary();
            case CharacterRaceEnum.Dwarf:
                return new StoryStepAgesForDwarfDictionary();
            default:
                throw new UnknownRaceError(query.race.toString());
        }
    }
    
}
