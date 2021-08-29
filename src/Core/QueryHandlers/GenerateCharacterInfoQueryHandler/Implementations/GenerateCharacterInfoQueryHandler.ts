import { GenerateNameQueryHandlerFactory } from "Core/Factories/Implementations/GenerateNameQueryHandlerFactory";
import { GetRandomElementOfArray } from "Core/Helpers/GetRandomElementOfArray";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { Genders } from "Resources/Lists/Genders/Genders";
import { NameLengths } from "Resources/Lists/Names/NameLengths";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";
import { GenerateCharacterInfoQuery } from "Resources/Models/Queries/GenerateCharacterInfoQuery";
import { IGenerateCharacterInfoQueryHandler } from "../IGenerateCharacterInfoQueryHandler";
import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import { GenerateClassQueryHandlerFactory } from "Core/Factories/Implementations/GenerateClassQueryHandlerFactory";
import { CharacterClass } from "Resources/Models/Characters/CharacterClass";
import { Races } from "Resources/Lists/Races/Races";
import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";
import { GetTraitsQueryHandlerFactory } from "Core/Factories/Implementations/GetTraitsQueryHandlerFactory";
import { CharacterAttributes } from "Resources/Models/Characters/CharacterAttributes";
import { ApplyTraitModifiersOnCharacterAttribute } from "Core/Helpers/ApplyTraitModifiersOnCharacterAttribute";
import { GetAttributesQueryHandlerFactory } from "Core/Factories/Implementations/GetAttributesQueryHandlerFactory";
import { GenerateCharacterAttributesQueryFactory } from "Core/Factories/Implementations/GenerateCharacterAttributesQueryFactory";
import { GetTraitsQueryFactory } from "Core/Factories/Implementations/GetTraitsQueryFactory";

export class GenerateCharacterInfoQueryHandler implements IGenerateCharacterInfoQueryHandler {
    public Execute(query: GenerateCharacterInfoQuery): CharacterInfo {
        return this.FillCharacterInfo(query);
    }

    private FillCharacterInfo(query: GenerateCharacterInfoQuery): CharacterInfo{
        const gender = this.GetRandomGenre();
        const race = this.GetRandomRace();
        const identity = this.GetRandomIdentity(gender, race);
        const characterClass = this.GetRandomClass();
        const traits = this.GetRandomTraits();
        const attributes = this.GetRandomAttributes(traits);

        return {
            identity,
            gender,
            race,
            characterClass,
            traits,
            attributes,
            seed: query.seed
        }
    }

    private GetRandomAttributes(traits: CharacterTrait[]):CharacterAttributes {
        const queryHandlerFactory = new GetAttributesQueryHandlerFactory();
        const queryFactory = new GenerateCharacterAttributesQueryFactory();
        const queryHandler = queryHandlerFactory.Get();

        let query = queryFactory.Get();
        query = ApplyTraitModifiersOnCharacterAttribute(query, traits);

        return queryHandler.Execute(query);
    }

    private GetRandomTraits(): CharacterTrait[]{
        const queryHandlerFactory = new GetTraitsQueryHandlerFactory();
        const queryFactory = new GetTraitsQueryFactory();

        const queryHandler = queryHandlerFactory.Get();
        const query = queryFactory.Get();

        return queryHandler.Execute(query);
    }

    private GetRandomIdentity(gender: CharacterGender, race: CharacterRace): CharacterIdentity{
        const queryHandlerFactory = new GenerateNameQueryHandlerFactory();
        const queryHandler = queryHandlerFactory.Get(race);
        const nameLength = GetRandomElementOfArray(NameLengths);

        return queryHandler.Execute({gender, race, length:nameLength});
    }

    private GetRandomGenre():CharacterGender{
        return GetRandomElementOfArray(Genders);
    }

    private GetRandomRace(): CharacterRace {
        return GetRandomElementOfArray(Races);
    }

    private GetRandomClass(): CharacterClass {
        const queryHandlerFactory = new GenerateClassQueryHandlerFactory();
        const queryHandler = queryHandlerFactory.Get();
        return queryHandler.Execute({});
    }
}
