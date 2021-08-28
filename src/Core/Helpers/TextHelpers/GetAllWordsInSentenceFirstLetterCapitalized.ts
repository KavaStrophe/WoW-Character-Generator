import { GetStringWithFirstLetterCapitalized } from "./GetStringWithFirstLetterCapitalized"

export const GetAllWordsInSentenceFirstLetterCapitalized = (sentence:string):string => {
    const space = " ";
    return sentence.split(space)
        .map(word => GetStringWithFirstLetterCapitalized(word))
        .join(space);
}
