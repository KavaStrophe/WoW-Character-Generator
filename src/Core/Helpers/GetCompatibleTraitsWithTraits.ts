import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { IncompatibleTraits } from "Resources/Lists/Traits/IncompatibleTraits";
import { Traits } from "Resources/Lists/Traits/Traits";

export const GetCompatibleTraitsWithTraits = (traits: CharacterTrait[]):CharacterTrait[] => {
    const existingTraits = Traits;
    const incompatibleTraits = IncompatibleTraits;

    const incompatibleTraitsWithGivenTraits = traits.map((trait) => {
        return incompatibleTraits.map((incompatibleTrait) => {
            if(incompatibleTrait.includes(trait)){
                return incompatibleTrait
            } else {
                return [trait]
            }
        })  
    }).flat().flat();

    return existingTraits.filter(trait => !incompatibleTraitsWithGivenTraits.includes(trait));
}
