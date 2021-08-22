import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { WrathOfTheLichKingRaces } from "./WrathOfTheLichKingRaces";

const cataclysmNewPlayableRaces: RaceEnum[] = [];
const cataclysmNewRaces: RaceEnum[] = [...cataclysmNewPlayableRaces];

export class CataclysmRaces implements IRaceInExpansion {
    static NewRaces = cataclysmNewRaces;
    static NewPlayableRaces = cataclysmNewRaces;
    static AvailableRaces = [...WrathOfTheLichKingRaces.AvailableRaces, ...cataclysmNewRaces];
    static AvailablePlayableRaces = [...WrathOfTheLichKingRaces.AvailablePlayableRaces, ...cataclysmNewPlayableRaces];
} 
