import { VanillaAllPlayableRaces, VanillaAllRaces } from "./Vanilla"

export const BurningCrusadePlayableRaces = []
export const BurningCrusadeAllPlayableRaces = [...BurningCrusadePlayableRaces, ...VanillaAllPlayableRaces]

export const BurningCrusadeRaces = [...BurningCrusadePlayableRaces]
export const BurningCrusadeAllRaces = [...BurningCrusadePlayableRaces, ...VanillaAllRaces]
