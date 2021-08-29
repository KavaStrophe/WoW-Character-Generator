import { GetCompatibleTraitsWithTraits } from "Core/Helpers/GetCompatibleTraitsWithTraits";
import { GetRandomElementOfArray } from "Core/Helpers/GetRandomElementOfArray";
import { GetRandomInteger } from "Core/Helpers/GetRandomInteger";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { GenerateCharacterTraitsQuery } from "Resources/Models/Queries/GenerateCharacterTraitsQuery";
import { IGetTraitsQueryHandler } from "../IGetTraitsQueryHandler";

export class GetTraitsQueryHandler implements IGetTraitsQueryHandler {

    Execute(_: GenerateCharacterTraitsQuery): CharacterTrait[] {
        const numberOfTraits = this.GetAmountOfTraits();
        const traits = new Array<CharacterTrait>();

        for(var i=0; i < numberOfTraits; i++){
            const compatibleTraits = GetCompatibleTraitsWithTraits(traits);
            const newTrait = GetRandomElementOfArray(compatibleTraits);
            traits.push(newTrait);
        }

        return traits;
    }
    
    private GetAmountOfTraits():number {
        /**
         * Target distribution:
         * 2 traits: 30%
         * 3 traits: 40%
         * 4 traits: 20%
         * 5 traits: 10%
         */
        const score = GetRandomInteger(100);

        if(score > 90){
            return 5;
        } else if(score > 70) {
            return 4;
        } else if(score > 30) {
            return 3;
        } else {
            return 2;
        }
        
    }
}
