import { CharacterClass } from "Resources/Models/Characters/CharacterClass";
import { GenerateCharacterClassQuery } from "Resources/Models/Queries/GenerateCharacterClassQuery";
import { IAdapter } from "./IAdapter";

export interface IGenerateClassAdapter extends IAdapter<GenerateCharacterClassQuery, CharacterClass>{}
