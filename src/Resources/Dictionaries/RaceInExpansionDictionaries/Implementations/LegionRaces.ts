import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { WarlordsOfDraenorRaces } from "./WarlordsOfDraenorRaces";

const legionNewPlayableRaces: CharacterRaceEnum[] = [];
const legionNewRaces: CharacterRaceEnum[] = [...legionNewPlayableRaces];

export class LegionRaces implements IRaceInExpansion {
    static NewRaces = legionNewRaces;
    static NewPlayableRaces = legionNewRaces;
    static AvailableRaces = [...WarlordsOfDraenorRaces.AvailableRaces, ...legionNewRaces];
    static AvailablePlayableRaces = [...WarlordsOfDraenorRaces.AvailablePlayableRaces, ...legionNewPlayableRaces];
} 
