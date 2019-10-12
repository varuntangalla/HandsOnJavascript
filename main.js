
const person = {

    firstName: 'SaiVarun',
    lastName: 'Tangalla',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName,person.lastName);

console.log(person.hobbies[1]);

console.log(person.address.city);



//Destructuring  
const { firstName, lastName, address: { city } } = person;


 console.log(city);


 person.email = 'saitangalla@gmail.com';

 console.log(person);

 const todos = [
     {
      id: 1,
      text: 'Take out trash',
      isCompleted: true   
     },
     {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true   
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false   
    }

];

console.log(todos[1].text);


