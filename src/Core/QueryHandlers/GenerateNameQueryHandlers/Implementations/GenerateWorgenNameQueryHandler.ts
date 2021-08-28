import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery'
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity'
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized'
import { GetRandomElementOfArray } from 'Core/Helpers/GetRandomElementOfArray'
import { PersonalizedError } from 'Core/Errors/PersonalizedError'
import { ErrorCode } from 'Resources/Enums/System/ErrorCode'
import { WorgenFemaleFirstNames, WorgenLastNames, WorgenMaleFirstNames } from 'Resources/Lists/Names/WorgenNameParts'

export class GenerateWorgenNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query:GenerateNameQuery):CharacterIdentity {
        const firstName = GetStringWithFirstLetterCapitalized(this.GetFirstName(query.gender));
        const lastName = GetStringWithFirstLetterCapitalized(this.GetLastName());
        const fullName = `${firstName} ${lastName}`;

        return {
            firstName,
            lastName,
            fullName
        }
    }

    private GetFirstName(gender:CharacterGender):string{
        switch(gender){
            case CharacterGender.Female:
                return GetRandomElementOfArray(WorgenFemaleFirstNames);
            case CharacterGender.Male:
                return GetRandomElementOfArray(WorgenMaleFirstNames);
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }
    }

    private GetLastName():string{
        return GetRandomElementOfArray(WorgenLastNames);
    }
}
