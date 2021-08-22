import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { CataclysmRaces } from "./CataclysmRaces";

const mistsOfPandariaNewPlayableRaces: RaceEnum[] = [];
const mistsOfPandariaNewRaces: RaceEnum[] = [...mistsOfPandariaNewPlayableRaces];

export class MistsOfPandariaRaces implements IRaceInExpansion {
    static NewRaces = mistsOfPandariaNewRaces;
    static NewPlayableRaces = mistsOfPandariaNewRaces;
    static AvailableRaces = [...CataclysmRaces.AvailableRaces, ...mistsOfPandariaNewRaces];
    static AvailablePlayableRaces = [...CataclysmRaces.AvailablePlayableRaces, ...mistsOfPandariaNewPlayableRaces];
} 
