import { CataclysmPlayableRaces, CataclysmAllRaces } from "./Cataclysm"

export const MistsOfPandariaPlayableRaces = []
export const MistsOfPandariaRaces = [...MistsOfPandariaPlayableRaces]

export const MistsOfPandariaAllPlayableRaces = [...MistsOfPandariaPlayableRaces, ...CataclysmPlayableRaces]
export const MistsOfPandariaAllRaces = [...MistsOfPandariaRaces, ...CataclysmAllRaces]
