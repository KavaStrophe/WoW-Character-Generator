import { IFactory } from "Core/Factories/IFactory";
import { IGenerateCharacterInfoQueryHandler } from "Core/QueryHandlers/GenerateCharacterInfoQueryHandler/IGenerateCharacterInfoQueryHandler";
import { GenerateCharacterInfoQueryHandler } from "Core/QueryHandlers/GenerateCharacterInfoQueryHandler/Implementations/GenerateCharacterInfoQueryHandler";

export class GenerateCharacterInfoQueryHandlerFactory implements IFactory<void, IGenerateCharacterInfoQueryHandler> {
    Get(): IGenerateCharacterInfoQueryHandler {
        return new GenerateCharacterInfoQueryHandler();
    }
}
