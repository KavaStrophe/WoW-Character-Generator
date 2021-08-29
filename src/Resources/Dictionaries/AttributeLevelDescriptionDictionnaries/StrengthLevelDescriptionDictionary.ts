import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const StrengthLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Feeble", description: ""}],
    [CharacterLevel.Beginner, {name: "Weak", description: ""}],
    [CharacterLevel.Average, {name: "Able", description: ""}],
    [CharacterLevel.Expert, {name: "Strong", description: ""}],
    [CharacterLevel.Master, {name: "Hulking", description: ""}],
    [CharacterLevel.Godly, {name: "Heroic", description: ""}],
])
