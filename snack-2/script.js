const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
const namePeople = people.map(peopleName => `${peopleName.name}`)

let namesString = '';

namePeople.forEach((name, index) => {
  namesString += name;

  if (index < namePeople.length - 1) {
    namesString += ', ';
  }
});

console.log(namesString);

// Risultato: 'Paolo', 'Giulia', 'Marco'