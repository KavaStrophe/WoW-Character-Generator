export const GetRandomInteger = (max:number, min?:number) => {
    if(min === undefined) {
        min = 0;
    }

    if(max === min) return max;

    if(max < min){
        const temp = max;
        max = min;
        min = temp;
    }

    return Math.floor(Math.random() * (max - min)) + min;
}
