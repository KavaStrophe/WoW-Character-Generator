import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery'
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity'
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized'
import { GetRandomElementOfArray } from 'Core/Helpers/GetRandomElementOfArray'
import { ForsakenFemaleFirstNames, ForsakenLastNameOne, ForsakenLastNameTwo, ForsakenMaleFirstNames } from 'Resources/Lists/Names/ForsakenNameParts'
import { PersonalizedError } from 'Core/Errors/PersonalizedError'
import { ErrorCode } from 'Resources/Enums/System/ErrorCode'
import { TwoPartNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/TwoPartNameGeneratorHelper'

export class GenerateForsakenNameQueryHandler implements IGenerateNameQueryHandler {
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
                return GetRandomElementOfArray(ForsakenFemaleFirstNames);
            case CharacterGender.Male:
                return GetRandomElementOfArray(ForsakenMaleFirstNames);
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }
    }

    private GetLastName():string{
        if(Math.random() > 0.5){
            const lastNameGenerator = new TwoPartNameGeneratorHelper(ForsakenLastNameTwo);
            return lastNameGenerator.Execute();
        } else {
            return GetRandomElementOfArray(ForsakenLastNameOne);
        }
    }
}
