import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";

const vanillaNewPlayableRaces: CharacterRaceEnum[] = [];
const vanillaNewRaces: CharacterRaceEnum[] = [...vanillaNewPlayableRaces];

export class VanillaRaces implements IRaceInExpansion {
    static NewRaces = vanillaNewRaces;
    static NewPlayableRaces = vanillaNewPlayableRaces;
    static AvailableRaces = vanillaNewRaces;
    static AvailablePlayableRaces = vanillaNewPlayableRaces;
}
