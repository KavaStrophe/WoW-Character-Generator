import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const WisdomLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Oblivious", description: ""}],
    [CharacterLevel.Beginner, {name: "Ignorant", description: ""}],
    [CharacterLevel.Average, {name: "Mundane", description: ""}],
    [CharacterLevel.Expert, {name: "Aware", description: ""}],
    [CharacterLevel.Master, {name: "Otherworldly", description: ""}],
    [CharacterLevel.Godly, {name: "Omnipotent", description: ""}],
])
