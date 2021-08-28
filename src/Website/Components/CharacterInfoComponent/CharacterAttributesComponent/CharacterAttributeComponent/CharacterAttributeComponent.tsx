import { GetDescriptionForAttribute } from "Core/Helpers/DictionaryHelpers/GetDescriptionForAttribute";
import { GetDescriptionForAttributeLevel } from "Core/Helpers/DictionaryHelpers/GetDescriptionForAttributeLevel";
import { GetCharacterAttributeConfig } from "Core/Helpers/GetCharacterAttributeConfig";
import { GetStringWithFirstLetterCapitalized } from "Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { CharacterAttribute } from "Resources/Enums/Character/CharacterAttribute";
import { CharacterLevel } from "Resources/Enums/Character/CharacterLevel";
import { AttributeLevels } from "Resources/Lists/Attributes/AttributeLevels";
import { AttributeLevelIndicatorComponent } from "./AttributeLevelIndicatorComponent/AttributeLevelIndicatorComponent";

interface CharacterAttributeComponentParameters {
    attribute: CharacterAttribute;
    level: CharacterLevel;
}

export const CharacterAttributeComponent = ({attribute,level}:CharacterAttributeComponentParameters) => {
    const attributeDescription = GetDescriptionForAttribute(attribute);
    const levelDescription = GetDescriptionForAttributeLevel(level, attribute);
    const indexLevel = AttributeLevels.indexOf(level);
    const levelConfig  = GetCharacterAttributeConfig(attribute);

    return (
        <OverlayTrigger placement="left" overlay={
            <Tooltip id={`overlay-${attributeDescription.name}`}>
                {attributeDescription.description}
            </Tooltip>
        }>
            <Container className="pl-2 pr-2">
                <Row>
                    <Col>
                        <p className="mr-2 mb-0">
                            <span className="font-weight-bold mr-2">{GetStringWithFirstLetterCapitalized(attributeDescription.name)}:</span> 
                            <span>{levelDescription.name}</span>
                        </p>
                    </Col>
                    <Col className="text-right">
                        <AttributeLevelIndicatorComponent maxLevel={levelConfig.Max} level={indexLevel}/>
                    </Col>
                </Row>
                <Row>
                    <p>{levelDescription.description} </p>
                </Row>
            </Container>
        </OverlayTrigger>
    )
}
