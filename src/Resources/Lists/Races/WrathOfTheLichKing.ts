import { BurningCrusadeAllRaces, BurningCrusadePlayableRaces } from "./BurningCrusade"

export const WrathOfTheLichKingPlayableRaces = []
export const WrathOfTheLichKingRaces = [...WrathOfTheLichKingPlayableRaces]

export const WrathOfTheLichKingAllPlayableRaces = [...WrathOfTheLichKingPlayableRaces, ...BurningCrusadePlayableRaces]
export const WrathOfTheLichKingAllRaces = [...WrathOfTheLichKingRaces, ...BurningCrusadeAllRaces]
