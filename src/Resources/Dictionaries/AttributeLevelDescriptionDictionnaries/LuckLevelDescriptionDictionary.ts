import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const LuckLevelDescriptionDictionary = new Map<CharacterLevel, AttributeDescription>([
    [CharacterLevel.Weak, {name: "Unfortunate", description: ""}],
    [CharacterLevel.Beginner, {name: "Unlucky", description: ""}],
    [CharacterLevel.Average, {name: "Usual", description: ""}],
    [CharacterLevel.Expert, {name: "Lucky", description: ""}],
    [CharacterLevel.Master, {name: "Amazing", description: ""}],
    [CharacterLevel.Godly, {name: "Outstanding", description: ""}],
])
