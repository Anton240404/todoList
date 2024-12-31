// @ts-expect-error
const nums = [5, { name: "John" }, null, true, -13, [{}], ""]

// @ts-expect-error
// const result = nums.filter((num) => nums.filter((x) => x === num).length === 1)

const result = nums.filter((num) => {
  return nums.filter((x) => x === num).length === 1
})

// (num) => nums.filter((x) => x === num).length === 1
// (num) => nums.filter((x) => x === num)
// (num) => .length === 1

// (num) => nums.filter((x) => x === num)
// const result1 = nums.filter((x) => x === num) // [5, ]
// 1) (5) => nums.filter((5) => 5 === 5)
// 2) (5) => nums.filter((5) => true)
// 3) (5) => nums.filter((5) => 5 === 5)
// 4) (5) => nums.filter((5) => true)
console.log(result)
