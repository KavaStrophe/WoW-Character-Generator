import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { CataclysmRaces } from "./CataclysmRaces";

const mistsOfPandariaNewPlayableRaces: CharacterRaceEnum[] = [];
const mistsOfPandariaNewRaces: CharacterRaceEnum[] = [...mistsOfPandariaNewPlayableRaces];

export class MistsOfPandariaRaces implements IRaceInExpansion {
    static NewRaces = mistsOfPandariaNewRaces;
    static NewPlayableRaces = mistsOfPandariaNewRaces;
    static AvailableRaces = [...CataclysmRaces.AvailableRaces, ...mistsOfPandariaNewRaces];
    static AvailablePlayableRaces = [...CataclysmRaces.AvailablePlayableRaces, ...mistsOfPandariaNewPlayableRaces];
} 
