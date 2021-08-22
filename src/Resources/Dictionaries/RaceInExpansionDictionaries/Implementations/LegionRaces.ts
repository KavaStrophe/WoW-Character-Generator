import { RaceEnum } from "Resources/Enums/RaceEnum";
import { IRaceInExpansion } from "../IRaceInExpansion";
import { WarlordsOfDraenorRaces } from "./WarlordsOfDraenorRaces";

const legionNewPlayableRaces: RaceEnum[] = [];
const legionNewRaces: RaceEnum[] = [...legionNewPlayableRaces];

export class LegionRaces implements IRaceInExpansion {
    static NewRaces = legionNewRaces;
    static NewPlayableRaces = legionNewRaces;
    static AvailableRaces = [...WarlordsOfDraenorRaces.AvailableRaces, ...legionNewRaces];
    static AvailablePlayableRaces = [...WarlordsOfDraenorRaces.AvailablePlayableRaces, ...legionNewPlayableRaces];
} 
