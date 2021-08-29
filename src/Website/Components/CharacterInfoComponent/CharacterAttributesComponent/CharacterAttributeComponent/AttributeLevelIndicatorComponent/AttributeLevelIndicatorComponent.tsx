import { AttributeLevels } from "Resources/Lists/Attributes/AttributeLevels";


interface AttributeLevelIndicatorComponentParameters {
    level: number;
}

export const AttributeLevelIndicatorComponent = ({level}:AttributeLevelIndicatorComponentParameters) => {
    const indicators = new Array<JSX.Element>();
    const maxLevel = AttributeLevels.length;

    for(let i=0; i < maxLevel; i++){
        const circleColor = i <= level ? "GreenBackground" : "RedBackground";
        indicators.push(
            (<div className={`Circle ${circleColor}`} key={i}></div>)
        )
    }

    return (<>{indicators}</>);
}
