import { IGenerateNameAdapter } from "Adapters/IGenerateNameAdapter";
import { GenerateNameQueryHandlerFactory } from "Factories/Implementations/GenerateNameQueryHandlerFactory";
import { CharacterIdentity } from "Resources/Models/CharacterIdentity";
import { GenerateNameQuery } from "Resources/Models/GenerateNameQuery";

export class GenerateNameAdapter implements IGenerateNameAdapter {
    public Get(params: GenerateNameQuery):CharacterIdentity {
        const nameGeneratorFactory = new GenerateNameQueryHandlerFactory();
        const nameGenerator = nameGeneratorFactory.Get(params.race);
        return nameGenerator.Execute(params);
    }
}
