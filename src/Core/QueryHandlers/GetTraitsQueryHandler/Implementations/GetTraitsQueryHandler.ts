import { GetCompatibleTraitsWithTraits } from "Core/Helpers/GetCompatibleTraitsWithTraits";
import { GetRandomElementOfArray } from "Core/Helpers/GetRandomElementOfArray";
import { GetRandomInteger } from "Core/Helpers/GetRandomInteger";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { GenerateCharacterTraitsQuery } from "Resources/Models/Queries/GenerateCharacterTraitsQuery";
import { IGetTraitsQueryHandler } from "../IGetTraitsQueryHandler";

export class GetTraitsQueryHandler implements IGetTraitsQueryHandler {
    Execute(query: GenerateCharacterTraitsQuery): CharacterTrait[] {
        const numberOfTraits = GetRandomInteger(query.max, query.min);
        const traits = new Array<CharacterTrait>();

        for(var i=0; i < numberOfTraits; i++){
            const compatibleTraits = GetCompatibleTraitsWithTraits(traits);
            const newTrait = GetRandomElementOfArray(compatibleTraits);
            traits.push(newTrait);
        }

        return traits;
    }
}
