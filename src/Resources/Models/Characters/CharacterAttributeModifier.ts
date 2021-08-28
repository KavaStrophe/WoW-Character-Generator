import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";

export interface CharacterAttributeModifier {
    attribute: CharacterAttribute;
    modifier: number;
}
