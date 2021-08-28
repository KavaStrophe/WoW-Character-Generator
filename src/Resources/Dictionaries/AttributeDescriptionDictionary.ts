import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { AttributeDescription } from "Resources/Models/Characters/AttributeDescription";

export const AttributeDescriptionDictionary = new Map<CharacterAttribute, AttributeDescription>([
    [CharacterAttribute.Strength, {name: "strength", description: "Physical strength."}],
    [CharacterAttribute.WillPower, {name: "willpower", description: "Mental strength."}],
    [CharacterAttribute.Dexterity, {name: "dexterity", description: "Agility and movement speed."}],
    [CharacterAttribute.Constitution, {name: "constitution", description: "Physical resistance and endurance."}],
    [CharacterAttribute.Intelligence, {name: "intelligence", description: "Capacity to solve complex problems."}],
    [CharacterAttribute.Charisma, {name: "charisma", description: "Capacity to influence people."}],
    [CharacterAttribute.Wisdom, {name: "wisdom", description: "Various knowledge of the world and history."}],
    [CharacterAttribute.Luck, {name: "luck", description: "Probability to get a better outcome."}],
    [CharacterAttribute.Perception, {name: "perception", description: "Perception of the surroundings."}],
])
