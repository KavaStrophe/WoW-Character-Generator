import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const WillpowerLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Slavish", description: ""}],
    [CharacterLevel.Beginner, {name: "Submissive", description: ""}],
    [CharacterLevel.Average, {name: "Ordinary", description: ""}],
    [CharacterLevel.Expert, {name: "Strong", description: ""}],
    [CharacterLevel.Master, {name: "Indomitable", description: ""}],
    [CharacterLevel.Godly, {name: "Domineering", description: ""}],
])
