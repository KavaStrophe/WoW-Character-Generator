import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const AttributeLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Weak", description: "Weak"}],
    [CharacterLevel.Beginner, {name: "Beginner", description: "Beginner"}],
    [CharacterLevel.Average, {name: "Average", description: "Average"}],
    [CharacterLevel.Expert, {name: "Expert", description: "Expert"}],
    [CharacterLevel.Master, {name: "Master", description: "Master"}],
])
