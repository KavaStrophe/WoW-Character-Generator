import { MistsOfPandariaPlayableRaces, MistsOfPandariaAllRaces } from "./MistsOfPandaria"

export const WarlordsOfDraenorPlayableRaces = []
export const WarlordsOfDraenorRaces = [...WarlordsOfDraenorPlayableRaces]

export const WarlordsOfDraenorAllPlayableRaces = [...WarlordsOfDraenorPlayableRaces, ...MistsOfPandariaPlayableRaces]
export const WarlordsOfDraenorAllRaces = [...WarlordsOfDraenorRaces, ...MistsOfPandariaAllRaces]
