const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterResult = values.filter((value) => value % 2 === 0);
console.log(filterResult);

const findResult = values.find((value) => value % 2 !== 0);
console.log(findResult);

const mapResult = values.map((value) => ({ value }));
console.log(mapResult);

const reduceResult = values.reduce((total, value) => total + value, 0);
console.log(reduceResult);

if (values.includes(5)) {
  console.log('5 is included');
}

const [one, ...otherValues] = values;
console.log(one, otherValues);
