import { GetPagePathConfigForPageName } from "Core/Helpers/DictionaryHelpers/GetPagePathConfigForPageName";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PageName } from "Resources/Enums/Website/PageName";

export const MainNavigationComponent = () => {
    const homePagePathConfig = GetPagePathConfigForPageName(PageName.HomePage);
    const newCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.NewRandomCharacter);
    const savedCharactersPagePathConfig = GetPagePathConfigForPageName(PageName.SavedCharacters);


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href={homePagePathConfig.path}>Home</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href={`${newCharacterPagePathConfig.path}`}>New Character</Nav.Link>
                <Nav.Link href={`${savedCharactersPagePathConfig.path}`}>Saved Characters</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}
