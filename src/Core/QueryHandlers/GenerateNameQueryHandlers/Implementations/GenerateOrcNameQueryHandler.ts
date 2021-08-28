import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity';
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized';
import { SixPartsNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/SixPartNameGeneratorHelper';
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender';
import { PersonalizedError } from 'Core/Errors/PersonalizedError';
import { ErrorCode } from 'Resources/Enums/System/ErrorCode';
import { OrcFemaleFirstNameParts, OrcLastNameParts, OrcMaleFirstNameParts } from 'Resources/Lists/Names/OrcNameParts';
import { TwoPartNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/TwoPartNameGeneratorHelper';

export class GenerateOrcNameQueryHandler implements IGenerateNameQueryHandler {
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
        const lastNameGenerator = new TwoPartNameGeneratorHelper(OrcLastNameParts);
        return lastNameGenerator.Execute();
    }

    GetFirstName(query: GenerateNameQuery):string{
        let firstNameParts:string[][];

        switch(query.gender){
            case CharacterGender.Female:
                firstNameParts = OrcFemaleFirstNameParts;
                break;
            case CharacterGender.Male:
                firstNameParts = OrcMaleFirstNameParts;
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }

        const firstNameGenerator = new SixPartsNameGeneratorHelper(firstNameParts);
        return firstNameGenerator.Execute(query);
    }
}
