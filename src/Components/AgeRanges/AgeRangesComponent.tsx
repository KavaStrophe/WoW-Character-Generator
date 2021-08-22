
import { GetAgeRangePerStoryStepForRaceFactory } from "Factories/Implementations/GetAgeRangePerStoryStepForRaceFactory";
import { useEffect, useState } from "react";
import { RaceToStringDictionary } from "Resources/Dictionaries/EntitiesToStringDictionaries/Implementations/RacesToStringDictionary";
import { IStoryStepAgesForRaceDictionary } from "Resources/Dictionaries/StoryStepAgesForRaceDictionaries/IStoryStepAgesForRaceDictionary";
import { CharacterRaceEnum } from "Resources/Enums/CharacterEnums/CharacterRaceEnum";
import { CharacterStoryStepEnum } from "Resources/Enums/CharacterEnums/CharacterStoryStepEnum";

interface IAgeRangeComponentParameters {
    race: CharacterRaceEnum;
    onChange: (step: CharacterStoryStepEnum) => void;
};

const AgeRangeLineComponent = (params: IAgeRangeLineComponentParameters) => {
    const onChange = () => {
        params.onChange(params.step);
    }

    return (
        <p>
            <input type="radio" id="steps" name="steps" value={params.step} onChange={onChange}/>
            {params.stepName}: {params.stepMin} - {params.stepMax}
        </p>
    )
}

interface IAgeRangeLineComponentParameters {
    step: CharacterStoryStepEnum;
    stepName: string;
    stepMin: number;
    stepMax: number | string;
    onChange: (step:CharacterStoryStepEnum) => void;
};

class DefaultAgeRangeComponentState {
    title: string = "";
    ageByStep: IStoryStepAgesForRaceDictionary = {
        limitChildhoodAge: 0,
        limitTeenagehoodAge: 0,
        limitAdulthoodAge: 0,
        limitSeniorhoodAge: 0,
    };
    selected: CharacterStoryStepEnum = CharacterStoryStepEnum.Childhood;
}

export const AgeRangeComponent = (params: IAgeRangeComponentParameters) => {
    const [state, setState] = useState(new DefaultAgeRangeComponentState())

    useEffect(() => {
        const raceNameDict = new RaceToStringDictionary();
        const factory = new GetAgeRangePerStoryStepForRaceFactory();
        const queryHandler = factory.Get();
        const ageByStep = queryHandler.Execute({race: params.race});

        const updatedState = {
            title: raceNameDict.Get(params.race),
            ageByStep
        };

        setState({...state, ...updatedState})

        return () => {};
    }, [params]);

    return (
        <div>
            <p>Steps in the life of {state.title}s</p>
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStepEnum.Childhood} stepName="Child" stepMin={0} stepMax={state.ageByStep.limitChildhoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStepEnum.Teenagehood} stepName="Teenager" stepMin={state.ageByStep.limitChildhoodAge} stepMax={state.ageByStep.limitTeenagehoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStepEnum.Adulthood} stepName="Adult" stepMin={state.ageByStep.limitTeenagehoodAge} stepMax={state.ageByStep.limitAdulthoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStepEnum.Seniorhood} stepName="Senior" stepMin={state.ageByStep.limitAdulthoodAge} stepMax={state.ageByStep.limitSeniorhoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStepEnum.Antichood} stepName="Antic" stepMin={state.ageByStep.limitSeniorhoodAge} stepMax="???" />
        </div>
    )
}
