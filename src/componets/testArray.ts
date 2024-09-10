const array = [1, 2, 3, 4, 5]

array.forEach((num) => {
    if (num % 2 === 0) {
        console.log(`Number = ${num * 2} `)
    } else {
        console.log(`Number = ${num}`)
    }
})
