import { GetPagePathConfigForPageName } from "Core/Helpers/GetPagePathConfigForPageName";
import { Redirect } from "react-router-dom";
import { PageName } from "Resources/Enums/Website/PageName";
import {v4 as uuid} from 'uuid'

export const RedirectToRandomCharacterPageComponent = () => {
    const randomCharacterPagePathConfig = GetPagePathConfigForPageName(PageName.RandomCharacter);
    return (
        <Redirect to={`${randomCharacterPagePathConfig.path}/${uuid()}`} />
    )
}
