import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity';
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized';
import { SixPartsNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/SixPartNameGeneratorHelper';
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender';
import { PersonalizedError } from 'Core/Errors/PersonalizedError';
import { ErrorCode } from 'Resources/Enums/System/ErrorCode';
import { TrollFemaleFirstNameParts, TrollMaleFirstNameParts } from 'Resources/Lists/Names/TrollNameParts';

export class GenerateTrollNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query: GenerateNameQuery):CharacterIdentity {
        const firstName = GetStringWithFirstLetterCapitalized(this.GetFirstName(query));

        return {
            fullName: firstName,
            firstName: firstName
        };
    }


    GetFirstName(query: GenerateNameQuery):string{
        let firstNameParts:string[][];

        switch(query.gender){
            case CharacterGender.Female:
                firstNameParts = TrollFemaleFirstNameParts;
                break;
            case CharacterGender.Male:
                firstNameParts = TrollMaleFirstNameParts;
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }

        const firstNameGenerator = new SixPartsNameGeneratorHelper(firstNameParts);
        return firstNameGenerator.Execute(query);
    }
}
