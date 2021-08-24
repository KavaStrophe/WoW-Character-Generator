import { LegionPlayableRaces, LegionAllRaces } from "./Legion"

export const BattleForAzerothPlayableRaces = []
export const BattleForAzerothRaces = [...BattleForAzerothPlayableRaces]

export const BattleForAzerothAllPlayableRaces = [...BattleForAzerothPlayableRaces, ...LegionPlayableRaces]
export const BattleForAzerothAllRaces = [...BattleForAzerothRaces, ...LegionAllRaces]
