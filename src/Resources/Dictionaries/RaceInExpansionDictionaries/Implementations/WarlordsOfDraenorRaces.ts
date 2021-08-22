import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { MistsOfPandariaRaces } from "./MistsOfPandariaRaces";

const warlordsOfDraenorNewPlayableRaces: CharacterRaceEnum[] = [];
const warlordsOfDraenorNewRaces: CharacterRaceEnum[] = [...warlordsOfDraenorNewPlayableRaces];

export class WarlordsOfDraenorRaces implements IRaceInExpansion {
    static NewRaces = warlordsOfDraenorNewRaces;
    static NewPlayableRaces = warlordsOfDraenorNewRaces;
    static AvailableRaces = [...MistsOfPandariaRaces.AvailableRaces, ...warlordsOfDraenorNewRaces];
    static AvailablePlayableRaces = [...MistsOfPandariaRaces.AvailablePlayableRaces, ...warlordsOfDraenorNewPlayableRaces];
} 
