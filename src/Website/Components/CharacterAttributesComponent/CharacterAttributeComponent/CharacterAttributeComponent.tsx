import { GetDescriptionForAttribute } from "Core/Helpers/GetDescriptionForAttribute";
import { GetDescriptionForAttributeLevel } from "Core/Helpers/GetDescriptionForAttributeLevel";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";

interface CharacterAttributeComponentParameters {
    attribute: CharacterAttribute;
    level: CharacterLevel;
}

export const CharacterAttributeComponent = ({attribute,level}:CharacterAttributeComponentParameters) => {
    const attributeDescription = GetDescriptionForAttribute(attribute);
    const levelDescription = GetDescriptionForAttributeLevel(level, attribute);

    return (
        <>
            <p>Attribute: {attributeDescription.name}</p>
            <p>Attribute Description: {attributeDescription.description}</p>
            <p>Level: {levelDescription.name} </p>
            <p>Level Description: {levelDescription.description} </p>
        </>
    )
}
