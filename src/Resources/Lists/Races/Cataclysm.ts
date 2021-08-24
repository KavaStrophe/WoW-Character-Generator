import { WrathOfTheLichKingAllRaces, WrathOfTheLichKingPlayableRaces } from "./WrathOfTheLichKing"

export const CataclysmPlayableRaces = []
export const CataclysmRaces = [...CataclysmPlayableRaces]

export const CataclysmAllPlayableRaces = [...CataclysmPlayableRaces, ...WrathOfTheLichKingPlayableRaces]
export const CataclysmAllRaces = [...CataclysmRaces, ...WrathOfTheLichKingAllRaces]
