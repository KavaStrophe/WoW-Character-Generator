import {
    DraeneiMaleFirstNameStartParts,
    DraeneiMaleFirstNameEndParts,
    DraeneiFemaleFirstNameStartParts,
    DraeneiFemaleFirstNameEndParts
} from 'Resources/Lists/NameLists/DraeneiNamePartsList'
import {IGenerateNameQueryHandler} from 'QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { GenderEnum } from 'Resources/Enums/GenderEnum'
import { GenerateNameQuery } from 'Resources/Models/GenerateNameQuery'
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

    private GetNameEndParts(gender:GenderEnum):string[]{
        let nameParts: string[];

        switch(gender){
            case GenderEnum.Female:
                nameParts = DraeneiFemaleFirstNameEndParts;
                break;
            case GenderEnum.Male:
                nameParts = DraeneiMaleFirstNameEndParts;
                break;
            case GenderEnum.NotSpecified:
                nameParts = [...DraeneiMaleFirstNameEndParts, ...DraeneiFemaleFirstNameEndParts];
                break;
        }

        return nameParts;
    }

    private GetNameStartParts(gender:GenderEnum):string[]{
        let nameParts: string[];

        switch(gender){
            case GenderEnum.Female:
                nameParts = DraeneiFemaleFirstNameStartParts;
                break;
            case GenderEnum.Male:
                nameParts = DraeneiMaleFirstNameStartParts;
                break;
            case GenderEnum.NotSpecified:
                nameParts = [...DraeneiMaleFirstNameStartParts, ...DraeneiFemaleFirstNameStartParts];
                break;
        }

        return nameParts;
    }
}
