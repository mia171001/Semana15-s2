const people3 = [
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

const everyBackEnd = people3.every((person) => person.courses.includes('back-end'));
console.log(everyBackEnd);
//El metodo every lo que hace es verificar si todas las personas estan llevando el curso de Backend
//para eso usa el metodo includes para validar si existe el curso back-end en el arreglo courses
//, si todas las persona estan llevando el curso la respuesta es true, de lo contrario
//la respuesta es falso