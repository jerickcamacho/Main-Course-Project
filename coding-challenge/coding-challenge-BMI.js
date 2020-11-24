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
    return victorBMI <= johnBMI ? "This will not run" 
    : johnBMI < victorBMI ? "Johns BMI is less than to Victor BMI " + "this is true" 
    : victorBMI === johnBMI ? "This will not run" 
    : "both have the same BMI";
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


/**** Coding Challenge Three *****/ 

// John and his family went on a holiday and went to 3 different restaurants. The bills were Php 1240, Php 480 and Php 2680.
// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than Php 500, 15% 
// when the bill is between Php 500 and Php 2000, and 10% if the bill is more than Php 2000.
// In the end, John would like to have 2 arrays:
// 1. Containing all three tips (one for each bill)
// 2. Containing all three final paid amounts (bill tip).


/***Object Method****/
let tipTransaction = {

    // Properties 
    name: 'John', 
    bills: [1240 , 480 , 2680],  // array bills 
    
    // Function Method 
	tipCalculator: function() {
		this.tipsForEach = []; 
        this.finalBillTip = [];

        // Iterate the array contents of 'bills' using for looop 
		for(let i = 0; i < this.bills.length; i++) {

			let percent;
			let bill = this.bills[i]; 

            // Tip condition in three different restaurants 
			if (bill < 500) {
                percent = 0.20;
                
			} else if (bill >= 500 && bill < 2000) {
                percent = 0.15;
                
			} else if (bill > 2000 ) {
                percent = 0.10;
                
			} else {
                return "Upon calculation of tip"; 
            }

			//  // Add two result of corresponding arrays 
			this.tipsForEach[i] = bill * percent;
			this.finalBillTip[i] = bill + bill * percent;
		}
	}
}
    // Calculate Average of two arrays tipsForEach & finalBillTip
    function totalAverage(tipsForEach) {
        let sum = 0;

        for(i = 0; i < tipsForEach.length; i++){
        sum = sum + tipsForEach[i];
        }
    
        return sum / tipsForEach.length;
    }

    // Printing the output 
    tipTransaction.tipCalculator(); 
    console.log(tipTransaction);

    tipTransaction["average"] = totalAverage(tipTransaction.tipsForEach);
    console.log(tipTransaction);
