import * as DwarfNameParts from 'Resources/Lists/NameLists/DwarfNamePartsList';
import {IGenerateNameQueryHandler} from 'QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { GenderEnum } from 'Resources/Enums/GenderEnum'
import { NameLengthEnum } from 'Resources/Enums/NameLengthEnum';
import { GenerateNameQuery } from 'Resources/Models/GenerateNameQuery';
import { GetRandomElementOfArray } from 'Helpers/GetRandomElementOfArray';
import { AvailableNameLengthsList } from 'Resources/Lists/AvailableNameLengthsList';
import { CharacterIdentity } from 'Resources/Models/CharacterIdentity';

export class GenerateDwarfNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query: GenerateNameQuery):CharacterIdentity {
        const lastName = this.GetLastName();
        const firstName = this.GetFirstName(query.gender, query.length);

        return {
            fullName: `${firstName} ${lastName}`,
            firstName: firstName,
            lastName: lastName
        };
    }

    private GetLastName():string{
        let firstPart = "";
        let lastPart = "";

        while(firstPart === lastPart){
            firstPart = GetRandomElementOfArray(DwarfNameParts.DwarfLastNameStartParts)
            lastPart = GetRandomElementOfArray(DwarfNameParts.DwarfLastNameEndParts)
        }
        
        return `${firstPart}${lastPart}`
    }

    private GetFirstName(gender: GenderEnum, nameLength: NameLengthEnum){
        const nameParts = this.GetNamePartsByGender(gender);

        if(nameLength === NameLengthEnum.NotSpecified)
            nameLength = GetRandomElementOfArray(AvailableNameLengthsList);
            
        switch(nameLength){
            case NameLengthEnum.Short:
                return this.GetShortName(nameParts);
            case NameLengthEnum.Medium:
                return this.GetMediumName(nameParts);
            default:
                return this.GetLongName(nameParts);
        }
    }

    private GetShortName(nameParts: string[][]){
        let partOne = "";
        let partTwo = "";
        let partThree = "";
        let partFour = "";
        let partFive = "";

        while(partOne === partThree || partThree === partFive){
            partOne = GetRandomElementOfArray(nameParts[0]);
            partTwo = GetRandomElementOfArray(nameParts[1]);
            partThree = GetRandomElementOfArray(nameParts[2]);
            partFour = GetRandomElementOfArray(nameParts[3]);
            partFive = GetRandomElementOfArray(nameParts[5]);
        }

        return `${partOne}${partTwo}${partThree}${partFour}${partFive}`;
    }

    private GetMediumName(nameParts:string[][]){
        let partOne = "";
        let partTwo = "";
        let partThree = "";
        let partFour = "";
        let partFive = "";
        let partSix = "";
        let partSeven = "";

        while(partOne === partThree || partThree === partFive){
            partOne = GetRandomElementOfArray(nameParts[0]);
            partTwo = GetRandomElementOfArray(nameParts[1]);
            partThree = GetRandomElementOfArray(nameParts[2]);
            partFour = GetRandomElementOfArray(nameParts[1]);
            partFive = GetRandomElementOfArray(nameParts[4]);
            partSix = GetRandomElementOfArray(nameParts[3]);
            partSeven = GetRandomElementOfArray(nameParts[5]);
        }

        return `${partOne}${partTwo}${partThree}${partFour}${partFive}${partSix}${partSeven}`;
    }

    private GetLongName(nameParts:string[][]){
        let partOne = "";
        let partTwo = "";
        let partThree = "";
        let partFour = "";
        let partFive = "";
        let partSix = "";
        let partSeven = "";

        while(partOne === partThree || partThree === partFive){
            partOne = GetRandomElementOfArray(nameParts[0]);
            partTwo = GetRandomElementOfArray(nameParts[1]);
            partThree = GetRandomElementOfArray(nameParts[4]);
            partFour = GetRandomElementOfArray(nameParts[1]);
            partFive = GetRandomElementOfArray(nameParts[2]);
            partSix = GetRandomElementOfArray(nameParts[3]);
            partSeven = GetRandomElementOfArray(nameParts[5]);
        }

        return `${partOne}${partTwo}${partThree}${partFour}${partFive}${partSix}${partSeven}`;
    }

    private GetNamePartsByGender(gender: GenderEnum):string[][]{
        let partOne:string[];
        let partTwo:string[];
        let partThree:string[];
        let partFour:string[];
        let partFive:string[];
        let partSix:string[];

        switch(gender){
            case GenderEnum.Female:
                partOne = DwarfNameParts.DwarfFemaleFirstNamePartTypeOne;
                partTwo = DwarfNameParts.DwarfFemaleFirstNamePartTypeTwo;
                partThree = DwarfNameParts.DwarfFemaleFirstNamePartTypeThree;
                partFour = DwarfNameParts.DwarfFemaleFirstNamePartTypeFour;
                partFive = DwarfNameParts.DwarfFemaleFirstNamePartTypeFive;
                partSix = DwarfNameParts.DwarfFemaleFirstNamePartTypeSix;
                break;
            case GenderEnum.Male:
                partOne = DwarfNameParts.DwarfMaleFirstNamePartTypeOne;
                partTwo = DwarfNameParts.DwarfMaleFirstNamePartTypeTwo;
                partThree = DwarfNameParts.DwarfMaleFirstNamePartTypeThree;
                partFour = DwarfNameParts.DwarfMaleFirstNamePartTypeFour;
                partFive = DwarfNameParts.DwarfMaleFirstNamePartTypeFive;
                partSix = DwarfNameParts.DwarfMaleFirstNamePartTypeSix;
                break;
            default:
                partOne = [...DwarfNameParts.DwarfFemaleFirstNamePartTypeOne, ...DwarfNameParts.DwarfMaleFirstNamePartTypeOne];
                partTwo = [...DwarfNameParts.DwarfFemaleFirstNamePartTypeTwo, ...DwarfNameParts.DwarfMaleFirstNamePartTypeTwo];
                partThree = [...DwarfNameParts.DwarfFemaleFirstNamePartTypeThree, ...DwarfNameParts.DwarfMaleFirstNamePartTypeThree];
                partFour = [...DwarfNameParts.DwarfFemaleFirstNamePartTypeFour, ...DwarfNameParts.DwarfMaleFirstNamePartTypeFour];
                partFive = [...DwarfNameParts.DwarfFemaleFirstNamePartTypeFive, ...DwarfNameParts.DwarfMaleFirstNamePartTypeFive];
                partSix = [...DwarfNameParts.DwarfFemaleFirstNamePartTypeSix, ...DwarfNameParts.DwarfMaleFirstNamePartTypeSix];
                break;
        }

        return [partOne, partTwo, partThree, partFour, partFive, partSix]
    }
}
