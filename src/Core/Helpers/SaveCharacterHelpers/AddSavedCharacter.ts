import { COOKIE_CONFIG } from 'Config/CookiesConfig';
import Cookies from 'universal-cookie';

export const AddSavedCharacter = (seed: string) => {
    const cookies = new Cookies();
    let savedCharacters = cookies.get(COOKIE_CONFIG.SAVED_CHARACTERS) as string[];

    if(savedCharacters === undefined)
        savedCharacters = new Array<string>();

    savedCharacters.push(seed);
    cookies.set(COOKIE_CONFIG.SAVED_CHARACTERS, savedCharacters);
    return true;
}
