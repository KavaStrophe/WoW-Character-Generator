import { AgesByraceDictionary } from "Resources/Dictionaries/AgesByRaceDictionary";
import { CharacterRace } from "Resources/Enums/Character/CharacterRace";
import { CharacterStoryStep } from "Resources/Enums/Character/CharacterStoryStep";
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
    step: CharacterStoryStep;
    stepName: string;
    stepMin: number;
    stepMax: number | string;
    onChange: (step:CharacterStoryStep) => void;
};
interface IAgeRangeComponentParameters {
    race: CharacterRace;
    onChange: (step: CharacterStoryStep) => void;
};


export const AgeRangeComponent = (params: IAgeRangeComponentParameters) => {
    const agesOfRace = AgesByraceDictionary.get(params.race);
    if(agesOfRace === undefined) return (<div>No data</div>)

    return (
        <div>
            <p>Steps in the life of {params.race}s</p>
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStep.Childhood} stepName="Child" stepMin={0} stepMax={agesOfRace.endOfChildhoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStep.Teenagehood} stepName="Teenager" stepMin={agesOfRace.endOfChildhoodAge} stepMax={agesOfRace.endOfTeenagehoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStep.Adulthood} stepName="Adult" stepMin={agesOfRace.endOfTeenagehoodAge} stepMax={agesOfRace.endOfAdulthoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStep.Seniorhood} stepName="Senior" stepMin={agesOfRace.endOfAdulthoodAge} stepMax={agesOfRace.endOfSeniorhoodAge-1} />
            <AgeRangeLineComponent onChange={params.onChange} step={CharacterStoryStep.Antichood} stepName="Antic" stepMin={agesOfRace.endOfSeniorhoodAge} stepMax="???" />
        </div>
    )
}
