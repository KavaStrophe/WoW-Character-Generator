import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import { GenerateCharacterInfoQuery } from "Resources/Models/Queries/GenerateCharacterInfoQuery";
import { IAdapter } from "./IAdapter";

export interface IGenerateCharacterInfoAdapter extends IAdapter<GenerateCharacterInfoQuery, CharacterInfo>{}
