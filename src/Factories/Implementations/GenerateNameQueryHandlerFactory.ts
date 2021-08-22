import { IGenerateNameQueryHandlerFactory } from "Factories/IGenerateNameQueryHandlerFactory";
import { GenerateDraeneiNameQueryHandler } from "QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDraeneiNameQueryHandler";
import { IGenerateNameQueryHandler } from "QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { GenerateDwarfNameQueryHandler } from "QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDwarfNameQueryHandler";

export class GenerateNameQueryHandlerFactory implements IGenerateNameQueryHandlerFactory {
    public Get(params: CharacterRaceEnum): IGenerateNameQueryHandler{
        switch(params){
            case CharacterRaceEnum.Draenei:
                return new GenerateDraeneiNameQueryHandler();
            case CharacterRaceEnum.Dwarf:
                return new GenerateDwarfNameQueryHandler();
            default:
                return new GenerateDraeneiNameQueryHandler();
        }
    }
}
