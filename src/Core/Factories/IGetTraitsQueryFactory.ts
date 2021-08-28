import { GenerateCharacterTraitsQuery } from "Resources/Models/Queries/GenerateCharacterTraitsQuery";
import { IFactory } from "./IFactory";

export interface IGetTraitsQueryFactory extends IFactory<void, GenerateCharacterTraitsQuery> {
    Get(): GenerateCharacterTraitsQuery;
}
