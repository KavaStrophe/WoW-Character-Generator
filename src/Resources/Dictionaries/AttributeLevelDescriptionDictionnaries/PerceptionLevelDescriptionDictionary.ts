import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const PerceptionLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Oblivious", description: ""}],
    [CharacterLevel.Beginner, {name: "Slow-minded", description: ""}],
    [CharacterLevel.Average, {name: "Average", description: ""}],
    [CharacterLevel.Expert, {name: "Alert", description: ""}],
    [CharacterLevel.Master, {name: "Sharp", description: ""}],
    [CharacterLevel.Godly, {name: "Eagle-eyed", description: ""}],
])
