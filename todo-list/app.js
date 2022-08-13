let input = prompt('What would you like to do?')
const todos = ['Collect Eggs', 'Clean room'];

while( input !== 'quit' && input !== 'q'){ //Allows for user to quit app with 'q' or 'quit
    if(input === 'list'){
        console.log('***************')
        for(let i = 0; i < todos.length; i++){//displays the indexes of the array
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('***************')
    } else if (input === 'new'){// adds to the array and provides feedback
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete'){// allows user to delete from the array
        const index = parseInt(prompt('Ok, enter an index to delete:')) //parses the input to an interget
        if(Number.isNaN(index)){
           const deleted = todos.splice(index, 1);
        console.log(`Ok, ${deleted} has been deleted`); 
        } else {
            console.log('Unknown Index')
        }
    }   
   input = prompt('What would you like to do?');
}
console.log('OK YOU QUIT THE APP');