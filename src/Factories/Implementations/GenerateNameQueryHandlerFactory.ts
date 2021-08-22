import { IGenerateNameQueryHandlerFactory } from "Factories/IGenerateNameQueryHandlerFactory";
import { GenerateDraeneiNameQueryHandler } from "QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDraeneiNameQueryHandler";
import { IGenerateNameQueryHandler } from "QueryHandlers/GenerateNameQueryHandlers/IGenerateNameQueryHandler";
import { RaceEnum } from "Resources/Enums/RaceEnum";
import { GenerateDwarfNameQueryHandler } from "QueryHandlers/GenerateNameQueryHandlers/Implementations/GenerateDwarfNameQueryHandler";

export class GenerateNameQueryHandlerFactory implements IGenerateNameQueryHandlerFactory {
    public Get(params: RaceEnum): IGenerateNameQueryHandler{
        switch(params){
            case RaceEnum.Draenei:
                return new GenerateDraeneiNameQueryHandler();
            case RaceEnum.Dwarf:
                return new GenerateDwarfNameQueryHandler();
            default:
                return new GenerateDraeneiNameQueryHandler();
        }
    }
}
