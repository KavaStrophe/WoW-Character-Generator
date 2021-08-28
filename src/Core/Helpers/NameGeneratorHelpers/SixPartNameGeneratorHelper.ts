import { CharacterNameLength } from "Resources/Enums/Character/CharacterNameLength";
import { NameLengths } from "Resources/Lists/Names/NameLengths";
import { GenerateNameQuery } from "Resources/Models/Queries/GenerateNameQuery";
import { GetRandomElementOfArray } from "../GetRandomElementOfArray";

export class SixPartsNameGeneratorHelper {
    private nameParts: string[][];

    Execute(query: GenerateNameQuery): string {
        return this.GetName(query.length);
    }

    private GetName(nameLength: CharacterNameLength){
        const nameParts = this.nameParts;

        if(nameLength === CharacterNameLength.NotSpecified)
            nameLength = GetRandomElementOfArray(NameLengths);
            
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


    public constructor(
        nameParts: string[][],
    ) {
        this.nameParts = nameParts;
    }
}
