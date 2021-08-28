import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { CharacterAttributes } from "Resources/Models/Characters/CharacterAttributes";
import { CharacterAttributeComponent } from "./CharacterAttributeComponent/CharacterAttributeComponent";

interface CharacterAttributesComponentParameters { 
    attributes: CharacterAttributes
}

export const CharacterAttributesComponent = ({attributes}:CharacterAttributesComponentParameters) => {

    return (
        <>
            <p className="text-center h4 mb-3">Attributes</p>
            <CharacterAttributeComponent attribute={CharacterAttribute.Strength} level={attributes.Strength} />
            <CharacterAttributeComponent attribute={CharacterAttribute.Dexterity} level={attributes.Dexterity} />
            <CharacterAttributeComponent attribute={CharacterAttribute.Constitution} level={attributes.Constitution} />
            <CharacterAttributeComponent attribute={CharacterAttribute.Intelligence} level={attributes.Intelligence} />
            <CharacterAttributeComponent attribute={CharacterAttribute.Charisma} level={attributes.Charisma} />
            <CharacterAttributeComponent attribute={CharacterAttribute.Wisdom} level={attributes.Wisdom} />
            <CharacterAttributeComponent attribute={CharacterAttribute.Luck} level={attributes.Luck} />
            <CharacterAttributeComponent attribute={CharacterAttribute.Perception} level={attributes.Perception} />
            <CharacterAttributeComponent attribute={CharacterAttribute.WillPower} level={attributes.WillPower} />
        </>
    )
}
