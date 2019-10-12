

//  prototype function Constructor function 

function Person(firstName, lastName, dob){

    this.firstName = firstName;
    this.lastName = lastName; 
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){

    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {

    return `${this.firstName} ${this.lastName}`;
}


//Class 

class Person{

    constructor(firstName, lastName, dob){

    this.firstName = firstName;
    this.lastName = lastName; 
    this.dob = new Date(dob);
    }

    getBirthYear() {

        return this.dob.getFullYear();
    }
    
    getFullName() {

        return `${this.firstName} ${this.lastName}`;
    }
}
//Instantiate Object 

const person1 = new Person('SaiVarun', 'Tangalla', '6-6-1996');
const person2 = new Person('Shravya', 'Tangalla', '9-9-1999');


console.log(person1);

console.log(person2.getFullName());





   



