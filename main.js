const prompt = require('prompt-sync')({sigint: true});
// functions
function selectChoice(){
    console.log("Welcome to the To Do List, List Manager Application!\n")

console.log("Select an action: ");
console.log(" ")
console.log("[1] Create To-Do list item. ");
console.log("[2] Complete To-Do list item. ");
console.log("[3] Exit the application")

 choice = Number(prompt(" > "));
}

function printList(){

    console.log("\n Current To-Do list; ");

let status = "";
    for(let i= 1; i < items.length; i++){
        //if statement to check if status is true or false

        if( statusArray[i] === false){
            status = "[incomplete]"
        } else if(statusArray[i] === true){
            status = "[complete]";

        }
        console.log(i + ". " + status + items[i]);
    }
    console.log("")
}



console.log("Welcome to the To Do List, List Manager Application!\n")

console.log("Select an action: ");
console.log(" ")
console.log("[1] Create To-Do list item. ");
console.log("[2] Complete To-Do list item. ");
console.log("[3] Exit the application")

let choice = Number(prompt(" > ")); // we officially a place for user to enter choice

let items =[""]; //our list of to do items
let statusArray = [""] // our list of completion statuses (true/false)



while (choice !== 3){
if(choice === 1){
    console.log("Create a new item\n");
   //prompt to ask user for new item;
    let answer = prompt("Please enter an item: ")
    items.push(answer);
    statusArray.push(false);



    console.log("To do list: ");
    //console.log(items);

    printList();
    selectChoice();

}else if (choice === 2){

    if(statusArray.length > 1){

   
    console.log("\nSelect an item to complete\n")
    
    let indexChoice = Number(prompt("Please enter a number: "));

    while(indexChoice > statusArray.length -1 || indexChoice === 0 || isNaN(indexChoice)){
        console.log("Please choose a number that corresponds to an item in the list");
        indexChoice = Number(prompt("Enter a number: "))
    }


    if(statusArray[indexChoice]=== false){
        statusArray[indexChoice] = true;
    }
}
 else{
     console.log("You have no items in your To-Do list")
 };
    printList();
    selectChoice();



} else {
    // if they pick anything else than 1 or 2

    console.log("Please choose a number between 1 and 3;\n")

    printList();
    selectChoice();
}
}

/*

1. figure out the UI

-console.log()
 - different user options
 -welcome message

 -prompts
    - checks if they input 1 or 2 or 3 - if statement
    1 for adding an item
    2 for completing an item
    3 for ending application
 IF statement to check for 1 or 2

 -display the list to user

 2. Store to-do lists items (choice === 1)
 -prompt user for to-dolist items
 start with an empty array
 -array to store prompts as a todolist item
 -.push() add toDo List item to array

 /////////////////////////////
 store those items as incomplete

 - start to do list at 1.... instead of index 0

store items as incomplere, where
incomplete = false;
complete = true;

let statusArray =[];



 3... completing incomplete items (choice === 2)

 prompt them for a number corresponds to the array index of the item we want to complete
 prompt for number that is the same as the number in the to do list that we are trying to mark as complete
 conditional to check completion status


considtional to check completing status
change false to true

 */




