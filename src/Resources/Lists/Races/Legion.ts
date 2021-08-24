import { WarlordsOfDraenorPlayableRaces, WarlordsOfDraenorAllRaces } from "./WarlordsOfDraenor"

export const LegionPlayableRaces = []
export const LegionRaces = [...LegionPlayableRaces]

export const LegionAllPlayableRaces = [...LegionPlayableRaces, ...WarlordsOfDraenorPlayableRaces]
export const LegionAllRaces = [...LegionRaces, ...WarlordsOfDraenorAllRaces]
