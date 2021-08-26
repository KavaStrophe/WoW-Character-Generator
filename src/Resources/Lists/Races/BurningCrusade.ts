import { CharacterRace } from "Resources/Enums/Character/CharacterRace"
import { VanillaAllPlayableRaces, VanillaAllRaces } from "./Vanilla"

export const BurningCrusadePlayableRaces = [CharacterRace.Draenei]
export const BurningCrusadeAllPlayableRaces = [...BurningCrusadePlayableRaces, ...VanillaAllPlayableRaces]

export const BurningCrusadeRaces = [...BurningCrusadePlayableRaces]
export const BurningCrusadeAllRaces = [...BurningCrusadePlayableRaces, ...VanillaAllRaces]
