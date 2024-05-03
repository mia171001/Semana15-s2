const people = [
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

const findDni = people.find((person) => person.dni === 76686442);
console.log(findDni);

//En el array estan los datos de ciertas personas, su dni, nombre y cursos que llevan
//para buscar por DNI hemos usado el metodo find, el cual hace una busqueda del valor que le hemos asignado
//y nos retorna el primer campo que cumple con ese requerimiento, en esta caso no habra repeticon
//ya que el DNI es unico, pero si hubiera datos iguales devolveria el primero que encuentre.