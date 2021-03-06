import { IGenerateNameAdapter } from "Core/Adapters/IGenerateNameAdapter";
import { GenerateNameQueryHandlerFactory } from "Core/Factories/Implementations/GenerateNameQueryHandlerFactory";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";
import { GenerateNameQuery } from "Resources/Models/Queries/GenerateNameQuery";

export class GenerateNameAdapter implements IGenerateNameAdapter {
    public Get(params: GenerateNameQuery):CharacterIdentity {
        const nameGeneratorFactory = new GenerateNameQueryHandlerFactory();
        const nameGenerator = nameGeneratorFactory.Get(params.race);
        return nameGenerator.Execute(params);
    }
}
