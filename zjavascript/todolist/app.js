let legend = "\n\n\n'new' - Add a Todo \n" +
    "'list' - List All Todos \n" +
    "'delete' - Remove Specific Todo \n" +
    "'quit or q' - Quit App\n\n\n";
console.log(`${legend}`);

let option = prompt("What would you like to do?");

const list = [];

while(option !== "quit" && option !== "q") {


    switch(option){
        case "new": {
            let newTodo = prompt("Enter a new todo");
            list.push(newTodo);
            console.log(`${newTodo} added to list`);
            console.log(`${legend}`);
            break;
        }
        case "list": {
            console.log("**************")
            let i = 0;
            list.forEach(item => {
                console.log(`${i}: ${item}`);
                i++;
            });
            console.log("**************")
            console.log(`${legend}`);
            break;
        }
        case "delete": {
            let index = prompt("Enter index of todo to delete");
            if(isNaN(parseInt(index))){
                console.log("entry is not a number")
                break;
            }else if (list.length ===0) {
                console.log("No items in list");
                break;
            }
            else if(index > list.length - 1 || index < 0 ){
                console.log(`${index} is not a valid index`);
                break;
            }

            let deletedElement = list.splice(parseInt(index), 1);
            console.log(`${deletedElement[0]} removed from list`);
            console.log(`${legend}`);
            break;
        }

    }
    option = prompt("What would you like to do?");
}

console.log(`Quitting...`);