import { IFactory } from "Factories/IFactory";
import { IGenerateCharacterInfoQueryHandler } from "QueryHandlers/GenerateCharacterInfoQueryHandler/IGenerateCharacterInfoQueryHandler";
import { GenerateCharacterInfoQueryHandler } from "QueryHandlers/GenerateCharacterInfoQueryHandler/Implementations/GenerateCharacterInfoQueryHandler";

export class GenerateCharacterInfoQueryHandlerFactory implements IFactory<void, IGenerateCharacterInfoQueryHandler> {
    Get(): IGenerateCharacterInfoQueryHandler {
        return new GenerateCharacterInfoQueryHandler();
    }
}
