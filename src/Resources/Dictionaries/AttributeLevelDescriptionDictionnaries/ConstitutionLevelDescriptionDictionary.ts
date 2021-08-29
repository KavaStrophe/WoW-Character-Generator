import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const ConstitutionLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Infirm", description: ""}],
    [CharacterLevel.Beginner, {name: "Fragile", description: ""}],
    [CharacterLevel.Average, {name: "Durable", description: ""}],
    [CharacterLevel.Expert, {name: "Tough", description: ""}],
    [CharacterLevel.Master, {name: "Unstoppable", description: ""}],
    [CharacterLevel.Godly, {name: "Immortal", description: ""}],
])
