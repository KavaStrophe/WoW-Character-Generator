import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery'
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity'
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized'
import { SixPartsNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/SixPartNameGeneratorHelper';
import { GnomeFemaleFirstnameParts, GnomeLastnameParts, GnomeMaleFirstnameParts } from 'Resources/Lists/Names/GnomeNameParts';
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender';
import { TwoPartNameGeneratorHelper } from 'Core/Helpers/NameGeneratorHelpers/TwoPartNameGeneratorHelper';
import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'

export class GenerateGnomeNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query:GenerateNameQuery):CharacterIdentity {
        const firstName = GetStringWithFirstLetterCapitalized(this.GenerateFirstName(query));
        const lastName = GetStringWithFirstLetterCapitalized(this.GenerateLastName());
        const fullName = `${firstName} ${lastName}`;

        return {
            firstName,
            lastName,
            fullName
        }
    }

    private GenerateLastName():string {
        const lastNameGenerator = new TwoPartNameGeneratorHelper(GnomeLastnameParts);
        return lastNameGenerator.Execute();
    }

    private GenerateFirstName(query:GenerateNameQuery):string {
        let firstNameParts: string[][];

        switch(query.gender){
            case CharacterGender.Female:
                firstNameParts = GnomeFemaleFirstnameParts;
                break;
            case CharacterGender.Male:
                firstNameParts = GnomeMaleFirstnameParts;
                break;
        }
        const firstNameGenerator = new SixPartsNameGeneratorHelper(firstNameParts);
        return firstNameGenerator.Execute(query);
    }
}
