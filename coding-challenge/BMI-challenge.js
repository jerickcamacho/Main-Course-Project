// Victor and John are trying to compare this BMI (body mass index), which is calculated using the formula:
// BMI = mass/height^2 = mass / (height * height). (mass in kg and height in meter).
// step
// 1. Store Victor and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Victor has a higher BMI than John.
// 4. Print a string to the console containing variable from step 3. (something like "Is Victor's BMI higher than John's? True".

/**** Coding Challenge One *****/
// kg
let victorMass = 60; 
let johnMass = 45; 

// meter
let victorHeight = 1.80; 
let johnHeight = 1.70; 

// BMI 
let victorBMI = victorMass/victorHeight ** 2;
let johnBMI = johnMass/johnHeight ** 2; 

// if else statments 
    if(victorBMI > johnBMI === true){
        console.log("Victor has a higher BMI" + " this is true") //Output: Victor has a higher BMI than John 
    }else{
        console.log("Johns has a higher BMI " + " this is false");
    }

/**** Coding Challenge Two *****/

// Equal value of BMI of two person
/* victorBMI = 18.5 */
/* johnBMI = 15.6 */

//if else if statements 
if(victorBMI >= johnBMI === false){
    console.log("This will not run")     
  
}else if (johnBMI < victorBMI){
   console.log("Johns BMI is less than to Victor BMI " + "this is true"); // This will be the output
  
}else if(victorBMI > johnBMI === false) {
   console.log("This will not run too");    
}else{
   return "both have the same BMI";  
}

// ternary operators 
function getHigherBMI() {
    return victorBMI <= johnBMI ? "This will not run" : johnBMI < victorBMI 
    ? "Johns BMI is less than to Victor BMI " + "this is true" : victorBMI === johnBMI ? "This will not run" : "both have the same BMI";
}
    console.log(getHigherBMI());

// switch statements 
switch(true){
    case (victorBMI <= johnBMI):
        alert("This will not run"); 
        break; 

    case (johnBMI < victorBMI): 
        alert("Johns BMI is less than to Victor BMI "); // This will be true 
        break; 

    case (victorBMI === johnBMI):
        alert("This will not run"); 
        break; 
     
    default:
        alert("both have the same BMI");   
}


// extra challenge 
// 1. create a function that creates a new person with kg(mass) and meter(height)
// 2. it should only accept a max of 3 person
// 3. it should compare wethere which person has a a bigger BMI

function newPerson(mass , height){
    
} 