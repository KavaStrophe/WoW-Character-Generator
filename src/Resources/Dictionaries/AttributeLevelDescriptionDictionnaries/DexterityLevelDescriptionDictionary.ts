import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const DexterityLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Clumsy", description: ""}],
    [CharacterLevel.Beginner, {name: "Inept", description: ""}],
    [CharacterLevel.Average, {name: "Average", description: ""}],
    [CharacterLevel.Expert, {name: "Swift", description: ""}],
    [CharacterLevel.Master, {name: "Skillful", description: ""}],
    [CharacterLevel.Godly, {name: "Supranatural", description: ""}],
])
