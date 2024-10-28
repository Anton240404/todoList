type Props = {
    value: string[];
};

export function Select(props: Props) {
    return (
        <div>
            {props.value.map((item) => {
                return <div>{item}</div>;
            })}
        </div>
    );
}

const array = [1, 2, 3, 4, 5];

const result = array.find((item) => item === 3);
console.log(result);

export function myMap(
    array: number[],
    callback: (item: number, index: number) => number
) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i);
        newArray.push(result);
    }
    return newArray;
}

export function myFind(array: number[], callback: (item: number, index: number) => boolean): number | undefined {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            return array[i];
        }
    }
    return undefined;
}

