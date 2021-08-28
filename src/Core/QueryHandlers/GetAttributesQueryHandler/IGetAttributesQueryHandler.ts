import { IQueryHandler } from 'Core/QueryHandlers/IQueryHandler';
import { CharacterAttributes } from 'Resources/Models/Characters/CharacterAttributes';
import { GenerateCharacterAttributesQuery } from 'Resources/Models/Queries/GenerateCharacterAttributesQuery';

export interface IGetAttributesQueryHandler extends IQueryHandler<GenerateCharacterAttributesQuery, CharacterAttributes> {
    Execute(query: GenerateCharacterAttributesQuery):CharacterAttributes
}
