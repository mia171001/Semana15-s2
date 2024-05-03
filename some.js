const people2 = [
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

const frontend = people2.some((person) => person.courses.includes('front-end'));
console.log(frontend);

//El metodo some lo que hace es verificar si al menos una persona esta llevando el curso de Front-End
//para eso usa el metodo includes el cual es para verificar si al menos una persona esta llevando
//el curso front-end, si hay mas de una persona llevando el curso la respuesta es true, de lo contrario
//la respuesta es falso