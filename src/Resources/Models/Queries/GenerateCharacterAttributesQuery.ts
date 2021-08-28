import { MinMax } from "../Others/MinMax";

export interface GenerateCharacterAttributesQuery {
    Strength: MinMax,
    Dexterity: MinMax,
    Constitution: MinMax,
    Intelligence: MinMax,
    Charisma: MinMax,
    Wisdom: MinMax,
    Luck: MinMax,
    Perception: MinMax,
    WillPower: MinMax
}
