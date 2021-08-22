import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";

const vanillaNewPlayableRaces: RaceEnum[] = [];
const vanillaNewRaces: RaceEnum[] = [...vanillaNewPlayableRaces];

export class VanillaRaces implements IRaceInExpansion {
    static NewRaces = vanillaNewRaces;
    static NewPlayableRaces = vanillaNewPlayableRaces;
    static AvailableRaces = vanillaNewRaces;
    static AvailablePlayableRaces = vanillaNewPlayableRaces;
}
