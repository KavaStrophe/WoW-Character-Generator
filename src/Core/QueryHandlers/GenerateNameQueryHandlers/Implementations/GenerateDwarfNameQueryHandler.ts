import * as DwarfNameParts from 'Resources/Lists/Names/DwarfNameParts';
import {IGenerateNameQueryHandler} from 'Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler'
import { CharacterGender } from 'Resources/Enums/Character/CharacterGender'
import { CharacterNameLength } from 'Resources/Enums/Character/CharacterNameLength';
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';
import { GetRandomElementOfArray } from 'Core/Helpers/GetRandomElementOfArray';
import { AvailableNameLengths } from 'Resources/Lists/AvailableNameLengths';
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity';
import { GetStringWithFirstLetterCapitalized } from 'Core/Helpers/GetStringWithFirstLetterCapitalized';

export class GenerateDwarfNameQueryHandler implements IGenerateNameQueryHandler {
    public Execute(query: GenerateNameQuery):CharacterIdentity {
        const lastName = GetStringWithFirstLetterCapitalized(this.GetLastName());
        const firstName = GetStringWithFirstLetterCapitalized(this.GetFirstName(query.gender, query.length));

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

    private GetFirstName(gender: CharacterGender, nameLength: CharacterNameLength){
        const nameParts = this.GetNamePartsByGender(gender);

        if(nameLength === CharacterNameLength.NotSpecified)
            nameLength = GetRandomElementOfArray(AvailableNameLengths);
            
        switch(nameLength){
            case CharacterNameLength.Short:
                return this.GetShortName(nameParts);
            case CharacterNameLength.Medium:
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

    private GetNamePartsByGender(gender: CharacterGender):string[][]{
        let partOne:string[];
        let partTwo:string[];
        let partThree:string[];
        let partFour:string[];
        let partFive:string[];
        let partSix:string[];

        switch(gender){
            case CharacterGender.Female:
                partOne = DwarfNameParts.DwarfFemaleFirstNamePartTypeOne;
                partTwo = DwarfNameParts.DwarfFemaleFirstNamePartTypeTwo;
                partThree = DwarfNameParts.DwarfFemaleFirstNamePartTypeThree;
                partFour = DwarfNameParts.DwarfFemaleFirstNamePartTypeFour;
                partFive = DwarfNameParts.DwarfFemaleFirstNamePartTypeFive;
                partSix = DwarfNameParts.DwarfFemaleFirstNamePartTypeSix;
                break;
            case CharacterGender.Male:
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
