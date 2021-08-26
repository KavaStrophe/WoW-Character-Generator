import { CharacterClass } from "Resources/Models/Characters/CharacterClass";
import { GenerateCharacterClassQuery } from "Resources/Models/Queries/GenerateCharacterClassQuery";
import { IQueryHandler } from "../IQueryHandler";

export interface IGenerateClassQueryHandler extends IQueryHandler<GenerateCharacterClassQuery, CharacterClass> {
    Execute(query:GenerateCharacterClassQuery):CharacterClass
}
