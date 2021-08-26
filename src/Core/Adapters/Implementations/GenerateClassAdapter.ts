import { GenerateClassQueryHandlerFactory } from "Core/Factories/Implementations/GenerateClassQueryHandlerFactory";
import { CharacterClass } from "Resources/Models/Characters/CharacterClass";
import { GenerateCharacterClassQuery } from "Resources/Models/Queries/GenerateCharacterClassQuery";
import { IGenerateClassAdapter } from "../IGenerateClassAdapter";

export class GenerateClassAdapter implements IGenerateClassAdapter {
    public Get(query: GenerateCharacterClassQuery):CharacterClass {
        const classGeneratorFactory = new GenerateClassQueryHandlerFactory();
        const classGenerator = classGeneratorFactory.Get();
        return classGenerator.Execute(query);
    }
}
