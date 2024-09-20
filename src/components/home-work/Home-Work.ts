type Generics = {
  string: string;
  number: number;
};

function __uncludes<T>(arr: T[], value: T): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

function getUniqueItems(items: number[]) {
  return items.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}

console.log(getUniqueItems([1, 1, 2, 2, 3, 3])); // [1,2,3]
