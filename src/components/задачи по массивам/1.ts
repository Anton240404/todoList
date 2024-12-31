const nums = [5, { name: "John" }, null, true, -13, [{}], ""]

// @ts-expect-error
const result = nums.filter((num) => nums.includes(num) && num)
// [5, { name: "John" }, [{}] ]

// (num) => nums.includes(num) && num

// (5) => nums.includes(5) && num
// (5) => true && 5
// (5) => 5 - truthy value
// (5) => Boolean(5)
// (5) => true

// ({ name: "John" }) => nums.includes({ name: "John" }) && num
// ({ name: "John" }) => { name: "John" }
// ({ name: "John" }) => { name: "John" } - truthy value
// ({ name: "John" }) => true - truthy value

// (null) => null
// (null) => null - falsy value
// (null) => false

// ([{}]) => [null, undefined]
// ([{}]) => []
// ([{}]) => true

// && - возвращает первую неправду или последнее значение

// [5, { name: "John" }]

console.log(result)

// @ts-expect-error
nums.includes(1)
