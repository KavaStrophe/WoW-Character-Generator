import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const IntelligenceLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Stupid", description: ""}],
    [CharacterLevel.Beginner, {name: "Naive", description: ""}],
    [CharacterLevel.Average, {name: "Ordinary", description: ""}],
    [CharacterLevel.Expert, {name: "Educated", description: ""}],
    [CharacterLevel.Master, {name: "Scholar", description: ""}],
    [CharacterLevel.Godly, {name: "Mastermind", description: ""}],
])
