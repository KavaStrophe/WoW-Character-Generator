import { PageName } from "Resources/Enums/Website/PageName"
import { PagePathConfig } from "Resources/Models/Website/PagePathConfig"

export const PagePathNameDictionary = new Map<PageName, PagePathConfig>([
    [PageName.HomePage, {path: "/", pathModel: "/"}],
    [PageName.RandomCharacter, {path: "/character", pathModel:"/character/:seed"}],
    [PageName.NewRandomCharacter, {path: "/character", pathModel:"/character"}],
    [PageName.SavedCharacters, {path: "/saved", pathModel:"/saved"}],
])
