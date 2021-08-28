import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity';
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized';
import { SixPartsNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/SixPartNameGeneratorHelper';
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender';
import { PersonalizedError } from 'Core/Errors/PersonalizedError';
import { ErrorCode } from 'Resources/Enums/System/ErrorCode';
import { TwoPartNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/TwoPartNameGeneratorHelper';
import { TaurenFemaleFirstNamePartsOne, TaurenFemaleFirstNamePartsTwo, TaurenLastNameParts, TaurenMaleFirstNamePartsOne, TaurenMaleFirstNamePartsTwo } from 'Resources/Lists/Names/TaurenNameParts';
import { GetRandomElementOfArray } from 'Core/Helpers/GetRandomElementOfArray';

export class GenerateTaurenNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query: GenerateNameQuery):CharacterIdentity {
        const lastName = GetStringWithFirstLetterCapitalized(this.GetLastName());
        const firstName = GetStringWithFirstLetterCapitalized(this.GetFirstName(query));

        return {
            fullName: `${firstName} ${lastName}`,
            firstName: firstName,
            lastName: lastName
        };
    }

    private GetLastName():string {
        const lastNameGenerator = new TwoPartNameGeneratorHelper(TaurenLastNameParts);
        return lastNameGenerator.Execute();
    }

    private GetFirstName(query: GenerateNameQuery):string {
        if(Math.random() > 0.5){
            return this.GetFirstNameTypeOne(query);
        }
        return this.GetFirstNameTypeTwo(query);
    }

    private GetFirstNameTypeOne(query: GenerateNameQuery):string {
        switch(query.gender){
            case CharacterGender.Female:
                return GetRandomElementOfArray(TaurenFemaleFirstNamePartsOne);
            case CharacterGender.Male:
                return GetRandomElementOfArray(TaurenMaleFirstNamePartsOne);
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }
    }

    private GetFirstNameTypeTwo(query: GenerateNameQuery):string{
        let firstNameParts:string[][];

        switch(query.gender){
            case CharacterGender.Female:
                firstNameParts = TaurenFemaleFirstNamePartsTwo;
                break;
            case CharacterGender.Male:
                firstNameParts = TaurenMaleFirstNamePartsTwo;
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }

        const firstNameGenerator = new SixPartsNameGeneratorHelper(firstNameParts);
        return firstNameGenerator.Execute(query);
    }
}
