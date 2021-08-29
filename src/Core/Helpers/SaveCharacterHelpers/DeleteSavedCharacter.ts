import { COOKIE_CONFIG } from 'Config/CookiesConfig';
import Cookies from 'universal-cookie';

export const DeleteSavedCharacter = (seed: string):void => {
    const cookies = new Cookies();
    const savedSeeds = cookies.get(COOKIE_CONFIG.SAVED_CHARACTERS) as string[];

    if(savedSeeds === undefined) return;

    const savedCharacters =  savedSeeds.filter(savedSeed => savedSeed !== seed);
    cookies.set(COOKIE_CONFIG.SAVED_CHARACTERS, savedCharacters);
}
