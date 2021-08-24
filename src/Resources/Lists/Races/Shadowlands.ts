import { BattleForAzerothAllRaces, BattleForAzerothPlayableRaces } from "./BattleForAzeroth"

export const ShadowlandsPlayableRaces = []
export const ShadowlandsRaces = [...ShadowlandsPlayableRaces]

export const ShadowlandsAllPlayableRaces = [...ShadowlandsPlayableRaces, ...BattleForAzerothPlayableRaces]
export const ShadowlandsAllRaces = [...ShadowlandsRaces, ...BattleForAzerothAllRaces]
