import { GetRandomElementOfArray } from "../GetRandomElementOfArray";

export class TwoPartNameGeneratorHelper {
    private nameFirstPart: string[];
    private nameLastPart: string[];

    
    public Execute():string {
        return this.GetLastName();
    }

    private GetLastName():string{
        let firstPart = "";
        let lastPart = "";

        while(firstPart === lastPart){
            firstPart = GetRandomElementOfArray(this.nameFirstPart)
            lastPart = GetRandomElementOfArray(this.nameLastPart)
        }
        
        return `${firstPart}${lastPart}`
    }

    constructor(nameparts:string[][]){
        this.nameFirstPart = nameparts[0];
        this.nameLastPart = nameparts[1];
    }
    
}
