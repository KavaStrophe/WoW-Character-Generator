import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery'
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity'
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized'
import { GetRandomElementOfArray } from 'Core/Helpers/GetRandomElementOfArray'
import { HumanFemaleFirstNames, HumanLastNames, HumanMaleFirstNames } from 'Resources/Lists/Names/HumanNameParts'
import { PersonalizedError } from 'Core/Errors/PersonalizedError'
import { ErrorCode } from 'Resources/Enums/System/ErrorCode'

export class GenerateHumanNameQueryHandler implements IGenerateNameQueryHandler {
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
                return GetRandomElementOfArray(HumanFemaleFirstNames);
            case CharacterGender.Male:
                return GetRandomElementOfArray(HumanMaleFirstNames);
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }
    }

    private GetLastName():string{
        return GetRandomElementOfArray(HumanLastNames);
    }
}
