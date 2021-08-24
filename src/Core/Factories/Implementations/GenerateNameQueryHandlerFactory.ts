import { IGenerateNameQueryHandlerFactory } from "Core/Factories/IGenerateNameQueryHandlerFactory";
import { GenerateDraeneiNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDraeneiNameQueryHandler";
import { IGenerateNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { GenerateDwarfNameQueryHandler } from "Core/QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDwarfNameQueryHandler";

export class GenerateNameQueryHandlerFactory implements IGenerateNameQueryHandlerFactory {
    public Get(params: CharacterRace): IGenerateNameQueryHandler{
        switch(params){
            case CharacterRace.Draenei:
                return new GenerateDraeneiNameQueryHandler();
            case CharacterRace.Dwarf:
                return new GenerateDwarfNameQueryHandler();
            default:
                return new GenerateDraeneiNameQueryHandler();
        }
    }
}
