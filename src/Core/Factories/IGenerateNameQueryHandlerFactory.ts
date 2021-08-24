import { IGenerateNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { IFactory } from "./IFactory";

export interface IGenerateNameQueryHandlerFactory extends IFactory<CharacterRace, IGenerateNameQueryHandler> {
    Get(params: CharacterRace): IGenerateNameQueryHandler;
}
