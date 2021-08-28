import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const ConstitutionLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Weak", description: ""}],
    [CharacterLevel.Beginner, {name: "Weak", description: ""}],
    [CharacterLevel.Average, {name: "Weak", description: ""}],
    [CharacterLevel.Expert, {name: "Weak", description: ""}],
    [CharacterLevel.Master, {name: "Weak", description: ""}],
])
