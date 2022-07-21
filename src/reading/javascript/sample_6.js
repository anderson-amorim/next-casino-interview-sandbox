const greetPerson = (person) => {
  const name = person?.name ?? 'You-Know-Who';
  const age = person?.age ?? 30;
  alert(`Hello, ${name}! You are ${age} years old.`);
};

greetPerson();
greetPerson({ age: 16 });
greetPerson({ name: 'Pam', age: 28 });
