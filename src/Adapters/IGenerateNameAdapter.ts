import { CharacterIdentity } from "Resources/Models/CharacterIdentity";
import { GenerateNameQuery } from "Resources/Models/GenerateNameQuery";
import { IAdapter } from "./IAdapter";

export interface IGenerateNameAdapter extends IAdapter<GenerateNameQuery, CharacterIdentity>{}
