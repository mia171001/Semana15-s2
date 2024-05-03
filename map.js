const people4 = [
    {
        dni: 76686442,
        name: 'Mia',
        courses: ['front-end', 'back-end', 'sqlserver'],
    },
    {
        dni: 73902832,
        name: 'Jordi',
        courses: ['asp.net', 'back-end', 'sqlserver'],
    },
    {
        dni: 15846407,
        name: 'Giovana',
        courses: ['python', 'ui-ux', 'back-end'],
    },
    {
        dni: 32783681,
        name: 'Antonio',
        courses: ['oracle', 'back-end', 'front-end'],
    },
    {
        dni: 76694520,
        name: 'Ricky',
        courses: ['mobile', 'back-end', 'mongodb'],
    }
];

const everyDni = people4.map((person) => person.dni);
console.log(everyDni);
//El metodo map crea un nuevo array con los resultados de la funcion indicada aplicada a cada uno de sus elementos
// en este caso esta mostrando un nuevo array con todos los DNI de las personas.