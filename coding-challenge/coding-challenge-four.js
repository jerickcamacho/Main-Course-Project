// Coding Challenge!
// Let's remember the first coding challenge where Victor and John compared their BMIs. Let's now implement the same functionality with objects and methods.

// a. For each of them, create an object with properties for their full name, mass and height.
// b. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// c. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI. 


/* johnBMI = 15.6 */
let john = {
    name: "John Young", 
    mass: 45, 
    height: 1.70, 

    // Method 
    totalBMI: function(){
        return this.mass / this.height ** 2;
    }
}

console.log(john.totalBMI()); 

/* victorBMI = 18.5 */
let victor = {
    name: "Victor Rivera", 
    mass: 60, 
    height: 1.80, 

    // Method 
    totalBMI: function(){
        return this.mass / this.height ** 2;    
    }
}    

console.log(victor.totalBMI()); 
  
function highestBMI(){
    if (john.totalBMI() > victor.totalBMI()){
        return john.name + " " + john.totalBMI() + " is the highest BMI";

    } else if (victor.totalBMI() > john.totalBMI()) {
        return victor.name + " " + victor.totalBMI() + " is the highest BMI";
    
    } else { 
        return "They are the same BMI"
    }
}

console.log(highestBMI()); 