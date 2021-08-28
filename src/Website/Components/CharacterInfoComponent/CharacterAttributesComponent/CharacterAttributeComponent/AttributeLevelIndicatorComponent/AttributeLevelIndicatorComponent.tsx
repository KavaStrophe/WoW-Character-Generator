

interface AttributeLevelIndicatorComponentParameters {
    level: number;
    maxLevel: number;
}

export const AttributeLevelIndicatorComponent = ({level, maxLevel}:AttributeLevelIndicatorComponentParameters) => {
    const indicators = new Array<JSX.Element>();

    for(let i=0; i < maxLevel; i++){
        const circleColor = i <= level ? "GreenBackground" : "RedBackground";
        indicators.push(
            (<div className={`Circle ${circleColor}`} key={i}></div>)
        )
    }

    return (<>{indicators}</>);
}
