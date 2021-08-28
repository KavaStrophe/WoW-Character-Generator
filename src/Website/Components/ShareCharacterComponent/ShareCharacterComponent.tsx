import { GetPagePathConfigForPageName } from "Core/Helpers/DictionaryHelpers/GetPagePathConfigForPageName"
import { useState } from "react";
import { PageName } from "Resources/Enums/Website/PageName"

interface ShareCharacterComponentParameters {
    seed:string
}

export const ShareCharacterComponent = ({seed}:ShareCharacterComponentParameters) => {
    const [copied, setCopied] = useState(false);
    const characterPagePathConfig = GetPagePathConfigForPageName(PageName.RandomCharacter)
    const copiedClass = copied ? 'show' : 'd-none';

    const copyPageUrlToClipBoard = () => {
        console.log("COPY")
        document.execCommand('copy', false, window.location.href);
        setCopied(true);
    }

    return (
        <> 
            Share the character infobox:
            <input type="text" readOnly={true} value={`${characterPagePathConfig.path}/${seed}`}/>
            <button onClick={copyPageUrlToClipBoard}>Copy</button>
            <span className={`${copiedClass} text-green `}>Copied!</span>
        </>
    )
}
