import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const CharismaLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Unpleasant", description: ""}],
    [CharacterLevel.Beginner, {name: "Plain", description: ""}],
    [CharacterLevel.Average, {name: "Average", description: ""}],
    [CharacterLevel.Expert, {name: "Likable", description: ""}],
    [CharacterLevel.Master, {name: "Charming", description: ""}],
    [CharacterLevel.Godly, {name: "Magnetic", description: ""}],
])
