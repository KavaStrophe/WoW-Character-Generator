import { GetRandomElementOfArray } from "Core/Helpers/GetRandomElementOfArray";
import { GetStringWithFirstLetterCapitalized } from "Core/Helpers/TextHelpers/GetStringWithFirstLetterCapitalized";
import { ClassFormats } from "Resources/Lists/Classes/ClassFormats";
import { ClassName } from "Resources/Lists/Classes/ClassName";
import { ClassPrefixes } from "Resources/Lists/Classes/ClassPrefixes";
import { ClassSuffixes } from "Resources/Lists/Classes/ClassSuffixes";
import { CharacterClass } from "Resources/Models/Characters/CharacterClass";
import { GenerateCharacterClassQuery } from "Resources/Models/Queries/GenerateCharacterClassQuery";
import { IGenerateClassQueryHandler } from "../IGenerateClassQueryHandler";

export class GenerateClassQueryHandler implements IGenerateClassQueryHandler {
    Execute(_:GenerateCharacterClassQuery): CharacterClass {
        const className = this.GetRandomClassName();

        return {
            className
        };
    }

    private GetRandomClassName():string{
        const format = this.GetRandomClassFormat();
        const prefix = this.GetRandomClassPrefix();
        const name = this.GetRandomClassMainName();
        const suffix = this.GetRandomClassSuffix();

        return format.replaceAll("{prefix}", prefix).replaceAll("{name}", name).replaceAll("{suffix}", suffix);
    }

    private GetRandomClassFormat():string {
        return GetRandomElementOfArray(ClassFormats);
    }
    
    private GetRandomClassMainName():string {
        return GetStringWithFirstLetterCapitalized(GetRandomElementOfArray(ClassName));
    }
    
    private GetRandomClassPrefix():string {
        return GetStringWithFirstLetterCapitalized(GetRandomElementOfArray(ClassPrefixes));
    }
    
    private GetRandomClassSuffix():string {
        return GetStringWithFirstLetterCapitalized(GetRandomElementOfArray(ClassSuffixes));
    }
    
}
