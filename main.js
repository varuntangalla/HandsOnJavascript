

// Constructor function 

function Person(firstName, lastName, dob){

    this.firstName = firstName;
    this.lastName = lastName; 
    this.dob = new Date(dob);
    this.getBirthYear = function(){

        return this.dob.getFullYear();
    }

    this.getFullName = function(){

       // return this.firstName +" "+this.lastName;

       return `${this.firstName} ${this.lastName}`
    }


}

//Instantiate Object 

const person1 = new Person('SaiVarun', 'Tangalla', '6-6-1996');
const person2 = new Person('Shravya', 'Tangalla', '9-9-1999');


console.log(person1.getBirthYear());

console.log(person1.getFullName());





   



