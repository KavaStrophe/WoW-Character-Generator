import { IGenerateNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { IFactory } from "./IFactory";

export interface IGenerateNameQueryHandlerFactory extends IFactory<CharacterRaceEnum, IGenerateNameQueryHandler> {
    Get(params: CharacterRaceEnum): IGenerateNameQueryHandler;
}
