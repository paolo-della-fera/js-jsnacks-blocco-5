const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
const namePeople = people.map(peopleName => `${peopleName.name}`)

console.log(namePeople);

// Risultato: 'Paolo', 'Giulia', 'Marco'