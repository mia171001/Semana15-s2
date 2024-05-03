const people5 = [
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

const isSqlServer = people5.filter((person) => person.courses.includes('sqlserver'));
console.log(isSqlServer);

//El metodo filter crea un nuevo array con todos los elementos que cumplan con la condicion implementada por
//la funcion dada, es decir en este caso el arreglo se esta filtrando por el curso sql server
