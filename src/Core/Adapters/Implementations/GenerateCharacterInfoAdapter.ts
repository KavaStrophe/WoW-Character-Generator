import { IGenerateCharacterInfoAdapter } from "Core/Adapters/IGenerateCharacterInfoAdapter";
import { GenerateCharacterInfoQueryHandlerFactory } from "Core/Factories/Implementations/GenerateCharacterInfoQueryHandlerFactory";
import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import { GenerateCharacterInfoQuery } from "Resources/Models/Queries/GenerateCharacterInfoQuery";

export class CharacterInfoGeneratorAdapter implements IGenerateCharacterInfoAdapter {
    Get(params: GenerateCharacterInfoQuery): CharacterInfo {
        const characterInfoGeneratorFactory = new GenerateCharacterInfoQueryHandlerFactory();
        const characterInfoGenerator = characterInfoGeneratorFactory.Get();
        return characterInfoGenerator.Execute(params);
    }
}
