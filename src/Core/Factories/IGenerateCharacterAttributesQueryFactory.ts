import { GenerateCharacterAttributesQuery } from "Resources/Models/Queries/GenerateCharacterAttributesQuery";
import { IFactory } from "./IFactory";

export interface IGenerateCharacterAttributesQueryFactory extends IFactory<void, GenerateCharacterAttributesQuery> {
    Get(): GenerateCharacterAttributesQuery;
}
