import { GameExpansion } from "Resources/Enums/Game/GameExpansion";
import { BurningCrusadeAllPlayableRaces, BurningCrusadeAllRaces, BurningCrusadePlayableRaces, BurningCrusadeRaces } from "Resources/Lists/Races/BurningCrusade";
import { VanillaAllPlayableRaces, VanillaAllRaces, VanillaPlayableRaces, VanillaRaces } from "Resources/Lists/Races/Vanilla";
import { WrathOfTheLichKingAllPlayableRaces, WrathOfTheLichKingAllRaces, WrathOfTheLichKingPlayableRaces, WrathOfTheLichKingRaces } from "Resources/Lists/Races/WrathOfTheLichKing";
import { CataclysmAllPlayableRaces, CataclysmAllRaces, CataclysmPlayableRaces, CataclysmRaces } from "Resources/Lists/Races/Cataclysm";
import { MistsOfPandariaAllPlayableRaces, MistsOfPandariaAllRaces, MistsOfPandariaPlayableRaces, MistsOfPandariaRaces } from "Resources/Lists/Races/MistsOfPandaria";
import { WarlordsOfDraenorAllPlayableRaces, WarlordsOfDraenorAllRaces, WarlordsOfDraenorPlayableRaces, WarlordsOfDraenorRaces } from "Resources/Lists/Races/WarlordsOfDraenor";
import { LegionAllPlayableRaces, LegionAllRaces, LegionPlayableRaces, LegionRaces } from "Resources/Lists/Races/Legion";
import { BattleForAzerothAllPlayableRaces, BattleForAzerothAllRaces, BattleForAzerothPlayableRaces, BattleForAzerothRaces } from "Resources/Lists/Races/BattleForAzeroth";
import { ShadowlandsAllPlayableRaces, ShadowlandsAllRaces, ShadowlandsPlayableRaces, ShadowlandsRaces } from "Resources/Lists/Races/Shadowlands";

import { RacesInExpansion } from "Resources/Models/Game/RacesInExpansion";

export const RacesByExpansionDictionary = new Map<GameExpansion, RacesInExpansion>([
    [GameExpansion.Vanilla, new RacesInExpansion(VanillaPlayableRaces, VanillaAllPlayableRaces, VanillaRaces, VanillaAllRaces)],
    [GameExpansion.BurningCrusade, new RacesInExpansion(BurningCrusadePlayableRaces, BurningCrusadeAllPlayableRaces, BurningCrusadeRaces, BurningCrusadeAllRaces)],
    [GameExpansion.WrathOfTheLichKing, new RacesInExpansion(WrathOfTheLichKingPlayableRaces, WrathOfTheLichKingAllPlayableRaces, WrathOfTheLichKingRaces, WrathOfTheLichKingAllRaces)],
    [GameExpansion.Cataclysm, new RacesInExpansion(CataclysmPlayableRaces, CataclysmAllPlayableRaces, CataclysmRaces, CataclysmAllRaces)],
    [GameExpansion.MistsOfPandaria, new RacesInExpansion(MistsOfPandariaPlayableRaces, MistsOfPandariaAllPlayableRaces, MistsOfPandariaRaces, MistsOfPandariaAllRaces)],
    [GameExpansion.WarlordsOfDraenor, new RacesInExpansion(WarlordsOfDraenorPlayableRaces, WarlordsOfDraenorAllPlayableRaces, WarlordsOfDraenorRaces, WarlordsOfDraenorAllRaces)],
    [GameExpansion.Legion, new RacesInExpansion(LegionPlayableRaces, LegionAllPlayableRaces, LegionRaces, LegionAllRaces)],
    [GameExpansion.BattleForAzeroth, new RacesInExpansion(BattleForAzerothPlayableRaces, BattleForAzerothAllPlayableRaces, BattleForAzerothRaces, BattleForAzerothAllRaces)],
    [GameExpansion.Shadowlands, new RacesInExpansion(ShadowlandsPlayableRaces, ShadowlandsAllPlayableRaces, ShadowlandsRaces, ShadowlandsAllRaces)],

])
