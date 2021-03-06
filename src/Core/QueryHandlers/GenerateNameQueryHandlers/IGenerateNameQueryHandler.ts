import { IQueryHandler } from 'Core/QueryHandlers/IQueryHandler';
import { CharacterIdentity } from 'Resources/Models/Characters/CharacterIdentity';
import { GenerateNameQuery } from 'Resources/Models/Queries/GenerateNameQuery';

export interface IGenerateNameQueryHandler extends IQueryHandler<GenerateNameQuery, CharacterIdentity> {
    Execute(query: GenerateNameQuery):CharacterIdentity
}
