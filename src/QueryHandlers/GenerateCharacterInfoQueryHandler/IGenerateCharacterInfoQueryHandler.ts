import { IQueryHandler } from "QueryHandlers/IQueryHandler";
import { CharacterInfo } from "Resources/Models/CharacterInfo";
import { GenerateCharacterInfoQuery } from "Resources/Models/GenerateCharacterInfoQuery";

export interface IGenerateCharacterInfoQueryHandler extends IQueryHandler<GenerateCharacterInfoQuery, CharacterInfo> {};
