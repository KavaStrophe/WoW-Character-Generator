import { CharacterIdentity } from "Resources/Models/CharacterIdentity";
import { GenerateNameQuery } from "Resources/Models/Queries/GenerateNameQuery";
import { IAdapter } from "./IAdapter";

export interface IGenerateNameAdapter extends IAdapter<GenerateNameQuery, CharacterIdentity>{}
