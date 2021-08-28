import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity';
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized';
import { SixPartsNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/SixPartNameGeneratorHelper';
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender';
import { PersonalizedError } from 'Core/Errors/PersonalizedError';
import { ErrorCode } from 'Resources/Enums/System/ErrorCode';
import { GoblinFemaleFirstNameParts, GoblinLastNameParts, GoblinMaleFirstNameParts } from 'Resources/Lists/Names/GoblinNameParts';
import { TwoPartNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/TwoPartNameGeneratorHelper';

export class GenerateGoblinNameQueryHandler implements IGenerateNameQueryHandler {
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
        const lastNameGenerator = new TwoPartNameGeneratorHelper(GoblinLastNameParts);
        return lastNameGenerator.Execute();
    }

    GetFirstName(query: GenerateNameQuery):string{
        let firstNameParts:string[][];

        switch(query.gender){
            case CharacterGender.Female:
                firstNameParts = GoblinFemaleFirstNameParts;
                break;
            case CharacterGender.Male:
                firstNameParts = GoblinMaleFirstNameParts;
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }

        const firstNameGenerator = new SixPartsNameGeneratorHelper(firstNameParts);
        return firstNameGenerator.Execute(query);
    }
}
