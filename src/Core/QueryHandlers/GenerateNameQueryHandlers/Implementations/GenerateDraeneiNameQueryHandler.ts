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
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/GetStringWithFirstLetterCapitalized'

export class GenerateDraeneiNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query:GenerateNameQuery):CharacterIdentity {
        const nameStartParts = this.GetNameStartParts(query.gender)
        const nameEndParts = this.GetNameEndParts(query.gender)

        const startName = nameStartParts[Math.floor(Math.random()*nameStartParts.length)];
        const endName = nameEndParts[Math.floor(Math.random()*nameEndParts.length)];
        const fullName = GetStringWithFirstLetterCapitalized(`${startName}${endName}`);


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
            case CharacterGender.NotSpecified:
                nameParts = [...DraeneiMaleFirstNameEndParts, ...DraeneiFemaleFirstNameEndParts];
                break;
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
            case CharacterGender.NotSpecified:
                nameParts = [...DraeneiMaleFirstNameStartParts, ...DraeneiFemaleFirstNameStartParts];
                break;
        }

        return nameParts;
    }
}
