import { GetPagePathConfigForPageName } from "Core/Helpers/DictionaryHelpers/GetPagePathConfigForPageName";
import { Link } from "react-router-dom"
import { PageName } from "Resources/Enums/Website/PageName";
import {v4 as uuid} from 'uuid';

export const MainNavigationComponent = () => {
    const homePagePathConfig = GetPagePathConfigForPageName(PageName.HomePage);
    const randomCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.RandomCharacter);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={homePagePathConfig.path}>Home</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={`${randomCharacterPagePathConfig.path}/${uuid()}`}>New Character</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`${randomCharacterPagePathConfig.path}/${uuid()}`}>Saved Characters</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
