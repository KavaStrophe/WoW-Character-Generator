import { IQueryHandler } from 'Core/QueryHandlers/IQueryHandler';
import { CharacterTrait } from 'Resources/Enums/Character/CharacterTrait';
import { GenerateCharacterTraitsQuery } from 'Resources/Models/Queries/GenerateCharacterTraitsQuery';

export interface IGetTraitsQueryHandler extends IQueryHandler<GenerateCharacterTraitsQuery, CharacterTrait[]> {
    Execute(query: GenerateCharacterTraitsQuery):CharacterTrait[]
}
