import { IGenerateClassQueryHandler } from "Core/QueryHandlers/GenerateClassQueryHandler/IGenerateClassQueryHandler";
import { GenerateClassQueryHandler } from "Core/QueryHandlers/GenerateClassQueryHandler/Implementation/GenerateClassQueryHandler";
import { IGenerateClassQueryHandlerFactory } from "../IGenerateClassQueryHandlerFactory";

export class GenerateClassQueryHandlerFactory implements IGenerateClassQueryHandlerFactory {
    public Get(): IGenerateClassQueryHandler{
        return new GenerateClassQueryHandler();
    }
}
