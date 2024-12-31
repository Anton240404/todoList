// @ts-expect-error
const nums = [5, { name: "John" }, null, true, -13, [{}], ""]

// @ts-expect-error
// const result = nums.filter((num) => nums.join(""))
// const result = nums.findIndex((num) => num < 0) // 4

// @ts-expect-error
nums.findIndex((5) => true)

console.log(result)
const data = [62, 12, 32, 12, 37];
// @ts-expect-error
const result1 = data.map((x) => x).map(() => {}).filter(x => data.includes(x)).forEach(x => x * 2)

//const result1 = data.map((x) => x).map(() => {}).filter(x => data.includes(x)).forEach(x => x * 2)
//data.map((62) => 62) --- [62,12, 32, 12, 37].
// [62,12, 32, 12, 37].map(() => {}) --- 

//    -           -          -            -       -
// [undefined, undefined, undefined, undefined, undefined].filter(undefined => true)

// [undefined, undefined, undefined, undefined, undefined].filter(undefined => data.includes(62))
// [].forEach(x => x * 2) --- 

const data = [62, 12, 32, 12, 37];
console.log(data.map((x) => x));
console.log(data.map((x) => x).map(() => {}));
console.log(data.map((x) => x).map(() => {}).filter(x => data.includes(x)));
console.log(data.map((x) => x).map(() => {}).filter(x => data.includes(x)).forEach(x => x * 2));





