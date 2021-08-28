import { CHARACTER_INFO_CONFIG } from "Config/CharacterInfoConfig";
import { GenerateCharacterTraitsQuery } from "Resources/Models/Queries/GenerateCharacterTraitsQuery";
import { IGetTraitsQueryFactory } from "../IGetTraitsQueryFactory";

export class GetTraitsQueryFactory implements IGetTraitsQueryFactory {
    Get(): GenerateCharacterTraitsQuery {
        return {
            max: CHARACTER_INFO_CONFIG.MAX_TRAITS,
            min: CHARACTER_INFO_CONFIG.MIN_TRAITS,
        }
    }
    
}
