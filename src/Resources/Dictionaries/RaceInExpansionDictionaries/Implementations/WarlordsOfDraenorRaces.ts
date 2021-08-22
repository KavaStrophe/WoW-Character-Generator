import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { MistsOfPandariaRaces } from "./MistsOfPandariaRaces";

const warlordsOfDraenorNewPlayableRaces: RaceEnum[] = [];
const warlordsOfDraenorNewRaces: RaceEnum[] = [...warlordsOfDraenorNewPlayableRaces];

export class WarlordsOfDraenorRaces implements IRaceInExpansion {
    static NewRaces = warlordsOfDraenorNewRaces;
    static NewPlayableRaces = warlordsOfDraenorNewRaces;
    static AvailableRaces = [...MistsOfPandariaRaces.AvailableRaces, ...warlordsOfDraenorNewRaces];
    static AvailablePlayableRaces = [...MistsOfPandariaRaces.AvailablePlayableRaces, ...warlordsOfDraenorNewPlayableRaces];
} 
