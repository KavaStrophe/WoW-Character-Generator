import { GameRaceType } from "Resources/Enums/Game/GameRaceType";
import { CharacterInfoIncomplete } from "Resources/Models/Characters/CharacterInfoIncomplete";

export class GenerateCharacterInfoQuery {
    preFilledCharacterInfo: CharacterInfoIncomplete;
    raceType: GameRaceType;

    constructor(preFilledCharacterInfo: CharacterInfoIncomplete, raceType: GameRaceType){
        this.preFilledCharacterInfo = preFilledCharacterInfo;
        this.raceType = raceType;
    }
}
