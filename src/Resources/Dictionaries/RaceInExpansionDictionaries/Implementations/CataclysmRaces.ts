import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { WrathOfTheLichKingRaces } from "./WrathOfTheLichKingRaces";

const cataclysmNewPlayableRaces: CharacterRaceEnum[] = [];
const cataclysmNewRaces: CharacterRaceEnum[] = [...cataclysmNewPlayableRaces];

export class CataclysmRaces implements IRaceInExpansion {
    static NewRaces = cataclysmNewRaces;
    static NewPlayableRaces = cataclysmNewRaces;
    static AvailableRaces = [...WrathOfTheLichKingRaces.AvailableRaces, ...cataclysmNewRaces];
    static AvailablePlayableRaces = [...WrathOfTheLichKingRaces.AvailablePlayableRaces, ...cataclysmNewPlayableRaces];
} 
