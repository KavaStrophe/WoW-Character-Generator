import { GetNameForGender } from "Core/Helpers/DictionaryHelpers/GetNameForGender";
import { GetNameForRace } from "Core/Helpers/DictionaryHelpers/GetNameForRace";
import { GetAllWordsInSentenceFirstLetterCapitalized } from "Core/Helpers/TextHelpers/GetAllWordsInSentenceFirstLetterCapitalized";
import { GetStringWithFirstLetterCapitalized } from "Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized";
import { Col, Row } from "react-bootstrap";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { CharacterClass } from "Resources/Models/Characters/CharacterClass";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";

interface CharacterIdentityComponentParameters { 
    identity: CharacterIdentity,
    gender: CharacterGender,
    race: CharacterRace,
    characterClass: CharacterClass,
}


export const CharacterIdentityComponent = ({identity, race, gender, characterClass}:CharacterIdentityComponentParameters) => {
    return (
        <>
            <p className="text-center h4 mb-3">Identity</p>
            <Row>
                <Col md={4} className="font-weight-bold ">Name:</Col> 
                <Col>{identity.fullName}</Col>
            </Row>
            <Row>
                <Col md={4} className="font-weight-bold ">Race:</Col> 
                <Col>{GetAllWordsInSentenceFirstLetterCapitalized(GetNameForRace(race))}</Col>
            </Row>
            <Row>
                <Col md={4} className="font-weight-bold ">Gender:</Col> 
                <Col>{GetStringWithFirstLetterCapitalized(GetNameForGender(gender))}</Col>
            </Row>
            <Row>
                <Col md={4} className="font-weight-bold ">Class:</Col> 
                <Col>{characterClass.className}</Col>
            </Row>
        </>
    )
}
