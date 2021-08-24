import { AgeOfDraenei, AgeOfDwarf } from "Resources/Constants/AgeOfRace";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { AgeOfRace } from "Resources/Models/Game/AgeOfRace";

export const AgesByraceDictionary = new Map<CharacterRace, AgeOfRace>([
    [CharacterRace.Draenei, AgeOfDraenei],
    [CharacterRace.Dwarf, AgeOfDwarf],
])
