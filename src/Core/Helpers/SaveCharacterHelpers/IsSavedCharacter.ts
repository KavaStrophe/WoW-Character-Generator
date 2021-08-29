import { COOKIE_CONFIG } from 'Config/CookiesConfig';
import Cookies from 'universal-cookie';

export const IsSavedCharacter = (seed: string) => {
    const cookies = new Cookies();
    const seeds = cookies.get(COOKIE_CONFIG.SAVED_CHARACTERS) as string[];

    if(seeds === undefined) return false;
    return seeds.includes(seed);
}
