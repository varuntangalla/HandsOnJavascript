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
    },
    {
        id: 4,
        text: 'Coding',
        isCompleted: false   
    }


];

/*
const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

*/

//For 

 /* for( let i = 0 ; i< todos.length;i++)
{
     console.log(todos[i].text);
}

*/


//While

/*
let i =0;
while(i<10)
{

    console.log('While Loop Number:' ${i});
    i++;
}
*/


/*
for(let todo of todos)
{
    console.log(todo.id);
}
*/


//forEACH, map, filter 

/*

todos.forEach(function (todos){

    console.log(todos.text);

});

*/

//map 

/*
const todoText  = todos.map(function(todo){

 return todo.text;

}
);

console.log(todoText);

*/

//filter 


const todoCompleted  = todos.filter(function(todo){

    return todo.isCompleted === true;
   
   }).map(function(todo){

    return todo.text;
   })
   

console.log(todoCompleted);








   



