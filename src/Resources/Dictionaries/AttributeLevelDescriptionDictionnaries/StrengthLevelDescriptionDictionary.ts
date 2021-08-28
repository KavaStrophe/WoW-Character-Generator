import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const StrengthLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Weak", description: ""}],
    [CharacterLevel.Beginner, {name: "Weak", description: ""}],
    [CharacterLevel.Average, {name: "Weak", description: ""}],
    [CharacterLevel.Expert, {name: "Weak", description: ""}],
    [CharacterLevel.Master, {name: "Badass", description: ""}],
])
