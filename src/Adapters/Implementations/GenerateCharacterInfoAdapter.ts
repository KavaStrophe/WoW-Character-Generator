import { IGenerateCharacterInfoAdapter } from "Adapters/IGenerateCharacterInfoAdapter";
import { GenerateCharacterInfoQueryHandlerFactory } from "Factories/Implementations/GenerateCharacterInfoQueryHandlerFactory";
import { CharacterInfo } from "Resources/Models/CharacterInfo";
import { GenerateCharacterInfoQuery } from "Resources/Models/Queries/GenerateCharacterInfoQuery";

export class CharacterInfoGeneratorAdapter implements IGenerateCharacterInfoAdapter {
    Get(params: GenerateCharacterInfoQuery): CharacterInfo {
        const characterInfoGeneratorFactory = new GenerateCharacterInfoQueryHandlerFactory();
        const characterInfoGenerator = characterInfoGeneratorFactory.Get();
        return characterInfoGenerator.Execute(params);
    }
}
