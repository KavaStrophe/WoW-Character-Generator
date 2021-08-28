import {
    DraeneiMaleFirstNameStartParts,
    DraeneiMaleFirstNameEndParts,
    DraeneiFemaleFirstNameStartParts,
    DraeneiFemaleFirstNameEndParts
} from 'Resources/Lists/Names/DraeneiNameParts'
import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery'
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity'
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized'
import { PersonalizedError } from 'Core/Errors/PersonalizedError'
import { ErrorCode } from 'Resources/Enums/System/ErrorCode'
import { TwoPartNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/TwoPartNameGeneratorHelper'

export class GenerateDraeneiNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query:GenerateNameQuery):CharacterIdentity {
        const nameStartParts = this.GetNameStartParts(query.gender)
        const nameEndParts = this.GetNameEndParts(query.gender)

        const generator = new TwoPartNameGeneratorHelper([nameStartParts, nameEndParts]);
        const fullName = GetStringWithFirstLetterCapitalized(generator.Execute());

        return {
            fullName: fullName,
            firstName: fullName,
            lastName: undefined
        }
        
    }

    private GetNameEndParts(gender:CharacterGender):string[]{
        let nameParts: string[];

        switch(gender){
            case CharacterGender.Female:
                nameParts = DraeneiFemaleFirstNameEndParts;
                break;
            case CharacterGender.Male:
                nameParts = DraeneiMaleFirstNameEndParts;
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }

        return nameParts;
    }

    private GetNameStartParts(gender:CharacterGender):string[]{
        let nameParts: string[];

        switch(gender){
            case CharacterGender.Female:
                nameParts = DraeneiFemaleFirstNameStartParts;
                break;
            case CharacterGender.Male:
                nameParts = DraeneiMaleFirstNameStartParts;
                break;
            default:
                throw new PersonalizedError(ErrorCode.UnknownGender);
        }

        return nameParts;
    }
}
