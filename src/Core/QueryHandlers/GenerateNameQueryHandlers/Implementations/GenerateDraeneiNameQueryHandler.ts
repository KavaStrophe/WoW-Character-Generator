import {
    DraeneiMaleFirstNameStartParts,
    DraeneiMaleFirstNameEndParts,
    DraeneiFemaleFirstNameStartParts,
    DraeneiFemaleFirstNameEndParts
} from 'Resources/Lists/NameLists/DraeneiNamePartsList'
import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { CharacterGenderEnum } from 'Resources/Enums/CharacterEnums/CharacterGenderEnum'
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery'
import { CharacterIdentity } from 'Resources/Models/CharacterIdentity'

export class GenerateDraeneiNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query:GenerateNameQuery):CharacterIdentity {
        const nameStartParts = this.GetNameStartParts(query.gender)
        const nameEndParts = this.GetNameEndParts(query.gender)

        const startName = nameStartParts[Math.floor(Math.random()*nameStartParts.length)];
        const endName = nameEndParts[Math.floor(Math.random()*nameEndParts.length)];

        return {
            fullName: `${startName}${endName}`,
            firstName: `${startName}${endName}`,
            lastName: undefined
        }
        
    }

    private GetNameEndParts(gender:CharacterGenderEnum):string[]{
        let nameParts: string[];

        switch(gender){
            case CharacterGenderEnum.Female:
                nameParts = DraeneiFemaleFirstNameEndParts;
                break;
            case CharacterGenderEnum.Male:
                nameParts = DraeneiMaleFirstNameEndParts;
                break;
            case CharacterGenderEnum.NotSpecified:
                nameParts = [...DraeneiMaleFirstNameEndParts, ...DraeneiFemaleFirstNameEndParts];
                break;
        }

        return nameParts;
    }

    private GetNameStartParts(gender:CharacterGenderEnum):string[]{
        let nameParts: string[];

        switch(gender){
            case CharacterGenderEnum.Female:
                nameParts = DraeneiFemaleFirstNameStartParts;
                break;
            case CharacterGenderEnum.Male:
                nameParts = DraeneiMaleFirstNameStartParts;
                break;
            case CharacterGenderEnum.NotSpecified:
                nameParts = [...DraeneiMaleFirstNameStartParts, ...DraeneiFemaleFirstNameStartParts];
                break;
        }

        return nameParts;
    }
}
