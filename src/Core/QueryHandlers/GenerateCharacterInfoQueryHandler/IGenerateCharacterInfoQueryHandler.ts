import { IQueryHandler } from "Core/QueryHandlers/IQueryHandler";
import { CharacterInfo } from "Resources/Models/CharacterInfo";
import { GenerateCharacterInfoQuery } from "Resources/Models/Queries/GenerateCharacterInfoQuery";

export interface IGenerateCharacterInfoQueryHandler extends IQueryHandler<GenerateCharacterInfoQuery, CharacterInfo> {};
