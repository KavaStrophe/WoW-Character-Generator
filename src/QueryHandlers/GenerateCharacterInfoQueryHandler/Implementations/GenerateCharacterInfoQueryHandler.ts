import { GenerateNameQueryHandlerFactory } from "Factories/Implementations/GenerateNameQueryHandlerFactory";
import { GetLatestExpansionFactory } from "Factories/Implementations/GetLatestExpansionFactory";
import { GetRacesFromExpansionFactory } from "Factories/Implementations/GetRacesFromExpansionFactory";
import { GetRandomElementOfArray } from "Helpers/GetRandomElementOfArray";
import { ExpansionEnum } from "Resources/Enums/ExpansionEnum";
import { GenderEnum } from "Resources/Enums/GenderEnum";
import { RaceEnum } from "Resources/Enums/RaceEnum";
import { RaceTypeEnum } from "Resources/Enums/RaceTypeEnum";
import { AvailableGendersList } from "Resources/Lists/AvailableGendersList";
import { AvailableNameLengthsList } from "Resources/Lists/AvailableNameLengthsList";
import { CharacterIdentity } from "Resources/Models/CharacterIdentity";
import { CharacterInfo } from "Resources/Models/CharacterInfo";
import { GenerateCharacterInfoQuery } from "Resources/Models/GenerateCharacterInfoQuery";
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

    private GetRandomIdentity(gender: GenderEnum, race: RaceEnum): CharacterIdentity{
        const queryHandlerFactory = new GenerateNameQueryHandlerFactory();
        const queryHandler = queryHandlerFactory.Get(race);
        const nameLength = GetRandomElementOfArray(AvailableNameLengthsList);

        return queryHandler.Execute({gender, race, length:nameLength});
    }

    private GetRandomGenre():GenderEnum{
        return GetRandomElementOfArray(AvailableGendersList);
    }

    private GetRandomRaceFromExpansion(expansion: ExpansionEnum, raceType: RaceTypeEnum): RaceEnum {
        const queryHandlerFactory = new GetRacesFromExpansionFactory();
        const queryHandler = queryHandlerFactory.Get(raceType);
        const availableRaces = queryHandler.Execute({expansion, raceType});

        return GetRandomElementOfArray(availableRaces);
    }

    private GetLatestExpansion():ExpansionEnum{
        const queryHandlerFactory = new GetLatestExpansionFactory();
        const queryHandler = queryHandlerFactory.Get();
        
        return queryHandler.Execute();
    }
}
