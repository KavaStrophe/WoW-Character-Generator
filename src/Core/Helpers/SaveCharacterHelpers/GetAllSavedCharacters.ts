import { COOKIE_CONFIG } from 'Config/CookiesConfig';
import Cookies from 'universal-cookie';

export const GetAllSavedCharacters = ():string[] => {
    const cookies = new Cookies();
    const savedCharacters = cookies.get(COOKIE_CONFIG.SAVED_CHARACTERS) as string[];

    if(savedCharacters === undefined)
        return new Array<string>();
    return savedCharacters;
}
