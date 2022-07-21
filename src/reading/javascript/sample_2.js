const person = {
  name: 'Jim',
  age: 30,
  job: 'Paper Salesman',
};

person['surname'] = 'Halpert';

const message = `${person.surname}, ${person.name} is ${person.age} years old and works as a ${person.job}.`;
console.log(message);

const { age, job } = person;
console.log(age, job);

const newPerson = { name: 'Dwight', surname: 'Schrute', age, job };
console.log(newPerson);
