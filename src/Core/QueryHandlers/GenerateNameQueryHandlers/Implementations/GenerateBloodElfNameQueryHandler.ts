import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity';
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized';
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender';
import { PersonalizedError } from 'Core/Errors/PersonalizedError';
import { ErrorCode } from 'Resources/Enums/System/ErrorCode';
import { TwoPartNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/TwoPartNameGeneratorHelper';
import { GetRandomElementOfArray } from 'Core/Helpers/GetRandomElementOfArray';
import { BloodElfFemaleFirstNamePartsOne, BloodElfFemaleFirstNamePartsTwo, BloodElfLastNameParts, BloodElfMaleFirstNamePartsOne, BloodElfMaleFirstNamePartsTwo } from 'Resources/Lists/Names/BloodElfNameParts';

export class GenerateBloodElfNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query: GenerateNameQuery):CharacterIdentity {
        const lastName = GetStringWithFirstLetterCapitalized(this.GetLastName());
        const firstName = GetStringWithFirstLetterCapitalized(this.GetFirstName(query));

        return {
            fullName: `${firstName} ${lastName}`,
            firstName: firstName,
            lastName: lastName
        };
    }

    GetLastName():string {
        const lastNameGenerator = new TwoPartNameGeneratorHelper(BloodElfLastNameParts);
        return lastNameGenerator.Execute();
    }

    GetFirstName(query: GenerateNameQuery):string{
        let firstNameParts:string[][];

        switch(query.gender){
            case CharacterGender.Female:
                firstNameParts = GetRandomElementOfArray([BloodElfFemaleFirstNamePartsOne, BloodElfFemaleFirstNamePartsTwo]);
                break;
            case CharacterGender.Male:
                firstNameParts = GetRandomElementOfArray([BloodElfMaleFirstNamePartsOne, BloodElfMaleFirstNamePartsTwo]);
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }

        const firstNameGenerator = new TwoPartNameGeneratorHelper(firstNameParts);
        return firstNameGenerator.Execute();
    }
}
