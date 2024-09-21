function _includes<T>(arr: T[], value: T): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

function getUniqueItems(items: number[]) {
  const uniqueItems: number[] = []

  items.forEach(item => {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item)
    }
  })

  return uniqueItems
}

// Доделать с объектом
const user1 = { id: 1, name: 'A' }
const user2 = { id: 2, name: 'B' }

const otherObj1 = { uniqueNumber: 1, name: 'A' }
const otherObj2 = { uniqueNumber: 2, name: 'A' }

console.log(getUniqueItems([user1, user2, { id: 1, name: 'A' }, { id: 2, name: 'A' }, { id: 3, name: 'C' }])); // [1,2,3]
