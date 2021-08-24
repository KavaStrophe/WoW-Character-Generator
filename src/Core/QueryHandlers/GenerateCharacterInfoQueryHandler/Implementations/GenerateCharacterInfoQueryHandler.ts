import { GenerateNameQueryHandlerFactory } from "Core/Factories/Implementations/GenerateNameQueryHandlerFactory";
import { GetLatestExpansionFactory } from "Core/Factories/Implementations/GetLatestExpansionFactory";
import { GetRacesFromExpansionFactory } from "Core/Factories/Implementations/GetRacesFromExpansionFactory";
import { GetRandomElementOfArray } from "Core/Helpers/GetRandomElementOfArray";
import { GameExpansionEnum } from "Resources/Enums/GameEnums/GameExpansionEnum";
import { CharacterGenderEnum } from "Resources/Enums/CharacterEnums/CharacterGenderEnum";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { GameRaceTypeEnum } from "Resources/Enums/GameEnums/GameRaceTypeEnum";
import { AvailableGendersList } from "Resources/Lists/AvailableGendersList";
import { AvailableNameLengthsList } from "Resources/Lists/AvailableNameLengthsList";
import { CharacterIdentity } from "Resources/Models/CharacterIdentity";
import { CharacterInfo } from "Resources/Models/CharacterInfo";
import { GenerateCharacterInfoQuery } from "Resources/Models/Queries/GenerateCharacterInfoQuery";
import { IGenerateCharacterInfoQueryHandler } from "../IGenerateCharacterInfoQueryHandler";

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

        return {
            identity,
            age: characterInfo.age || 0,
            gender,
            race,
            expansion
        }
    }

    private GetRandomIdentity(gender: CharacterGenderEnum, race: CharacterRaceEnum): CharacterIdentity{
        const queryHandlerFactory = new GenerateNameQueryHandlerFactory();
        const queryHandler = queryHandlerFactory.Get(race);
        const nameLength = GetRandomElementOfArray(AvailableNameLengthsList);

        return queryHandler.Execute({gender, race, length:nameLength});
    }

    private GetRandomGenre():CharacterGenderEnum{
        return GetRandomElementOfArray(AvailableGendersList);
    }

    private GetRandomRaceFromExpansion(expansion: GameExpansionEnum, raceType: GameRaceTypeEnum): CharacterRaceEnum {
        const queryHandlerFactory = new GetRacesFromExpansionFactory();
        const queryHandler = queryHandlerFactory.Get(raceType);
        const availableRaces = queryHandler.Execute({expansion, raceType});

        return GetRandomElementOfArray(availableRaces);
    }

    private GetLatestExpansion():GameExpansionEnum{
        const queryHandlerFactory = new GetLatestExpansionFactory();
        const queryHandler = queryHandlerFactory.Get();

        return queryHandler.Execute();
    }
}
