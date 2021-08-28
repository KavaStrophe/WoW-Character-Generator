import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { PagePathNameDictionary } from "Resources/Dictionaries/PagePathNameDictionary";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { PageName } from "Resources/Enums/Website/PageName";
import { PagePathConfig } from "Resources/Models/Website/PagePathConfig";

export const GetPagePathConfigForPageName = (pageName: PageName):PagePathConfig => {
    const pageConfig = PagePathNameDictionary.get(pageName);

    if(!pageConfig)
        throw new PersonalizedError(ErrorCode.UnknownPage);

    return pageConfig;
}
