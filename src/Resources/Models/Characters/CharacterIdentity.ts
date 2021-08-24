export class CharacterIdentity {
    lastName?:string;
    firstName:string;
    fullName:string;

    constructor(fullName: string, firstName: string, lastName?:string){
        this.fullName = fullName;
        this.lastName = lastName;
        this.firstName = firstName;
    }
}
