// if else if statements 
if(false) {
    console.log('skip this one');
}
    else if(true){
        console.log('Run this!'); 
    }else if(true){
        console.log('This will not run!'); 
    } 

// else statements 
if(false) {
    console.log('skip this one');
}
    else if(false){
        console.log('This will not run!'); 
    }else{
        console.log('Run this! '); 
    } 
// Boolean logic 
 
// true || false = true --> if one is true? the condition automatically run the condition 
// true && false = false -->  once the condition is false or true? it will run the condition

// AND operator 
if(100 > 10 && 10 === 10){
    console.log
} 

// OR operator 
if(10 === 9 || 10 > 9){
    console.log('One of them is true, so run this'); 
}

// Not operator - kabaligtaran or negate the boolean condition 
if(!false){
    console.log('This will return true.'); 
}

// Ternary operator same as if else statements 
function getFee(isMember){
    return (isMember ? '$2.00' : '$10.00'); // how to read this line ? if isMember is #2.00 run true, else falsy : $10.00
}

console.log(getFee(true)); 
// expected output: '$2.00'

console.log(getFee(false)); 
// expected ouput: '$10.00' 

// Switch statements 

let number = 5 + 3; 

switch (number) {
    case 5: 
        alert('Too small'); 
        break; 
    case 8: 
        alert('Exact value'); // 8 is the equal sum and it will run the condition
        break; 
    case 10: 
        alert('Too large'); 
        break; 
    default:
        alert('Unsure what value that is'); // no matches found                 
}

//Intro to functions
function myFunc(){};
const anotherFunction = function(){}; 
const yetAnother = 


//Dry principle (Dont repeat yourself)

//Intro to callbacks

function greetings(name){
    alert('Hello') + name; 
}

function processUserInput(callback){
    var name = prompt('Please enter your name.') // promt= user input coming from the console
    callback(name);
}

processUserInput(greetings);


// Return statements 
function add(x,y){
    let sum = a + b; 
    return sum; 
}

add(2,3); 

// Function declarations 
function calcRectArea(width, height){
    return width * height; 
}

console.log(calcRectArea(5,6));

// Function expressions 
let notHoisted = function(){
    console.log('bar'); 
}

// Arrays 
const studentNames = ['victor', 'john', 'franz', 'lj']; 

// Accessing elements 
const studentnames = [' Victor', 'John', 'Franz', 'LJ', 'Jose']; 

console.log(studentNames[1]); 


//.length 

// Manipulating the array
// push = add iten to the end of array  incrementing by 1.  
// pop = removes the last item in the array decrementing the length by 1. 




// Objects 

const user = {
    username: 'diaryomanila'
}; 
console.log(user.username);  

// assigning values 

const newUser = {
    isNew: true,
}

const loveJSString = "new.username:"; 


// Methods 
const newObject = {
    sayHiMethod: function(){
        console.log("Hi everyone!");
    }, 
}

newObject.sayHiMethod(); // Hi everyone! 

// this.keyword 

const user = {
    username: 'diaryovictor', 
    password: 'password123', 
    lovesJavaScript:true, 
    userSaysHi: function() {
        console.log(this.username + ' says hi!');
    },
}
user.userSaysHi(); 