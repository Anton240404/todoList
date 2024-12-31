// @ts-expect-error
const nums = [5, { name: "John" }, null, true, -13, [{}], ""]

// @ts-expect-error
const result = nums.findIndex((num) => num === nums.includes(num))
// const result = nums.findIndex((5) => true === true)

console.log(result)
