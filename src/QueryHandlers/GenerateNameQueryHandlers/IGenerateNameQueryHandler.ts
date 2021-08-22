import { IQueryHandler } from 'QueryHandlers/IQueryHandler';
import { CharacterIdentity } from 'Resources/Models/CharacterIdentity';
import { GenerateNameQuery } from 'Resources/Models/GenerateNameQuery';

export interface IGenerateNameQueryHandler extends IQueryHandler<GenerateNameQuery, CharacterIdentity> {
    Execute(query: GenerateNameQuery):CharacterIdentity
}
