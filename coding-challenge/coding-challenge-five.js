// Coding Challenge: Tip Calculator (Object version)
// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
// This time, John and his family went to 5 different restaurants. The bills were Php 1240, Php 480, Php 2680, Php 1800 and Php 420.
// John likes to tip 20% of the bill when the bill is less than Php 500, 15% when the bill is between Php 500 and Php 2000, and 10% if the bill is more than Php 2000.
// Implement a tip calculator using objects and loop:

// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

/***Object Method****/
let tipTransaction = {

    // Properties 
    name: 'John', 
    bills: [1240 , 480 , 2680, 1800, 420 ],  // array bills 
    tipsForEach: [],
    finalBillTip: [],

    // Function Method 
	tipCalculator: function() {

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

            // Add two result of corresponding arrays 
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

    // if else statments 
    function AverageTipsHighest (tipsForEach) {

    if (tipsForEach(john.tips) > tipsForEach(victor.tips)){
    
    } else{
            console.log("Johns has a higher BMI " + " this is false");
      }
    }

    // Printing the output 
    tipTransaction.tipCalculator(); 
    console.log(tipTransaction);

    tipTransaction["average"] = totalAverage(tipTransaction.tipsForEach);
    console.log(tipTransaction); 


