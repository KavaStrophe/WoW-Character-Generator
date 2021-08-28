import { GetPagePathConfigForPageName } from 'Core/Helpers/GetPagePathConfigForPageName';
import { Link } from 'react-router-dom';
import { PageName } from 'Resources/Enums/Website/PageName';

export const GenerateButtonComponent = () => {
    const newRandomCharacterPageConfig = GetPagePathConfigForPageName(PageName.NewRandomCharacter);
    return (
        <Link to={newRandomCharacterPageConfig.path}>New Character</Link>
    )
}
