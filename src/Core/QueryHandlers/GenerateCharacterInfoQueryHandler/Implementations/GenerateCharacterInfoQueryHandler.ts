import { GenerateNameQueryHandlerFactory } from "Core/Factories/Implementations/GenerateNameQueryHandlerFactory";
import { GetRandomElementOfArray } from "Core/Helpers/GetRandomElementOfArray";
import { GameExpansion } from "Resources/Enums/Game/GameExpansion";
import { CharacterGender } from "Resources/Enums/Character/CharacterGender";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { GameRaceType } from "Resources/Enums/Game/GameRaceType";
import { AvailableGenders } from "Resources/Lists/AvailableGenders";
import { AvailableNameLengths } from "Resources/Lists/AvailableNameLengths";
import { CharacterIdentity } from "Resources/Models/Characters/CharacterIdentity";
import { GenerateCharacterInfoQuery } from "Resources/Models/Queries/GenerateCharacterInfoQuery";
import { IGenerateCharacterInfoQueryHandler } from "../IGenerateCharacterInfoQueryHandler";
import { CharacterInfo } from "Resources/Models/Characters/CharacterInfo";
import { RacesByExpansionDictionary } from "Resources/Dictionaries/RacesByExpansionDictionary";
import { GetRacesOfRaceTypeFromRacesInExpansion } from "Core/Helpers/GetRacesOfRaceTypeFromRacesInExpansion";
import { OrderedExpansions } from "Resources/Lists/OrderedExpansions";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";
import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { GenerateClassQueryHandlerFactory } from "Core/Factories/Implementations/GenerateClassQueryHandlerFactory";
import { GenerateCharacterClassQuery } from "Resources/Models/Queries/GenerateCharacterClassQuery";
import { CharacterClass } from "Resources/Models/Characters/CharacterClass";

export class GenerateCharacterInfoQueryHandler implements IGenerateCharacterInfoQueryHandler {
    public Execute(query: GenerateCharacterInfoQuery): CharacterInfo {
        return this.FillCharacterInfo(query);
    }

    private FillCharacterInfo(query: GenerateCharacterInfoQuery): CharacterInfo{
        const characterInfo = query.preFilledCharacterInfo;

        // TODO
        const expansion = characterInfo.expansion || this.GetLatestExpansion();
        const gender = characterInfo.gender || this.GetRandomGenre();
        const race = characterInfo.race || this.GetRandomRaceFromExpansion(expansion, query.raceType);
        const identity = characterInfo.identity || this.GetRandomIdentity(gender, race);
        const characterClass = characterInfo.characterClass || this.GetRandomClass();

        return {
            identity,
            gender,
            race,
            expansion,
            characterClass
        }
    }

    private GetRandomIdentity(gender: CharacterGender, race: CharacterRace): CharacterIdentity{
        const queryHandlerFactory = new GenerateNameQueryHandlerFactory();
        const queryHandler = queryHandlerFactory.Get(race);
        const nameLength = GetRandomElementOfArray(AvailableNameLengths);

        return queryHandler.Execute({gender, race, length:nameLength});
    }

    private GetRandomGenre():CharacterGender{
        return GetRandomElementOfArray(AvailableGenders);
    }

    private GetRandomRaceFromExpansion(expansion: GameExpansion, raceType: GameRaceType): CharacterRace {
        const racesInExpansion = RacesByExpansionDictionary.get(expansion)
        if(racesInExpansion === undefined) throw new PersonalizedError(ErrorCode.NoRaceRegisteredForExpansion)

        const availableRaces = GetRacesOfRaceTypeFromRacesInExpansion(
            racesInExpansion,
            raceType
        );

        return GetRandomElementOfArray(availableRaces);
    }

    private GetLatestExpansion():GameExpansion{
        return OrderedExpansions[OrderedExpansions.length - 1];
    }

    private GetRandomClass(): CharacterClass {
        const queryHandlerFactory = new GenerateClassQueryHandlerFactory();
        const queryHandler = queryHandlerFactory.Get();
        return queryHandler.Execute(new GenerateCharacterClassQuery());
    }
}
