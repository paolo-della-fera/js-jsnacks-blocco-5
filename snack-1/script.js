const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
let namesString = '';

names.forEach((name, index) => {
    namesString += name;

    if (index < names.length) {
        namesString += ', ';
    }
});

console.log(namesString);

// Risultato: 'Edoardo', 'Simone', 'Francesco'