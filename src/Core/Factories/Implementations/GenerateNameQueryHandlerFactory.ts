import { IGenerateNameQueryHandlerFactory } from "Core/Factories/IGenerateNameQueryHandlerFactory";
import { GenerateDraeneiNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDraeneiNameQueryHandler";
import { IGenerateNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { GenerateDwarfNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDwarfNameQueryHandler";
import { GenerateHumanNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateHumanNameQueryHandler";
import { GenerateGnomeNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateGnomeNameQueryHandler";
import { GenerateNightElfNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateNightElfNameQueryHandler";
import { GenerateWorgenNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateWorgenNameQueryHandler";
import { GenerateBloodElfNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateBloodElfNameQueryHandler";
import { GenerateForsakenNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateForsakenNameQueryHandler";
import { GenerateGoblinNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateGoblinNameQueryHandler";
import { GenerateOrcNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateOrcNameQueryHandler";
import { GenerateTaurenNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateTaurenNameQueryHandler";
import { GenerateTrollNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateTrollNameQueryHandler";
import { PersonalizedError } from "Core/Errors/PersonalizedError";
import { ErrorCode } from "Resources/Enums/System/ErrorCode";

export class GenerateNameQueryHandlerFactory implements IGenerateNameQueryHandlerFactory {
    public Get(params: CharacterRace): IGenerateNameQueryHandler{
        switch(params){
            case CharacterRace.Draenei:
                return new GenerateDraeneiNameQueryHandler();
            case CharacterRace.Dwarf:
                return new GenerateDwarfNameQueryHandler();
            case CharacterRace.Human:
                return new GenerateHumanNameQueryHandler();
            case CharacterRace.Gnome:
                return new GenerateGnomeNameQueryHandler();
            case CharacterRace.NightElf:
                return new GenerateNightElfNameQueryHandler();
            case CharacterRace.Worgen:
                return new GenerateWorgenNameQueryHandler();
            case CharacterRace.BloodElf:
                return new GenerateBloodElfNameQueryHandler();
            case CharacterRace.Forsaken:
                return new GenerateForsakenNameQueryHandler();
            case CharacterRace.Goblin:
                return new GenerateGoblinNameQueryHandler();
            case CharacterRace.Orc:
                return new GenerateOrcNameQueryHandler();
            case CharacterRace.Tauren:
                return new GenerateTaurenNameQueryHandler();
            case CharacterRace.Troll:
                return new GenerateTrollNameQueryHandler();
            default:
                throw new PersonalizedError(ErrorCode.UnknownRace)
        }
    }
}
