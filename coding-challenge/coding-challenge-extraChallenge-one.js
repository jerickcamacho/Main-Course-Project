// Coding Challenge: Extra!
// Extra after finishing: Victor's family also went on a holiday, going to 4 different restaurants. The bills were Php 770, Php 3750, Php 1100 and Php 450.
// Victor likes to tip 20% of the bill when the bill is less than Php 1000, 10% when the bill is between Php 1000 and Php 3000, and 25% if the bill is more than Php 3000 (different than John).
// Implement the same functionality as before, this time using Victor's tipping rules.
// 1. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
// 2. Calculate the average tip for each family
// 3. Log to the console which family paid the highest tips on average.

/************************************************************** VICTOR **********************************************/ 
const tipTransaction = {
    name: "Victor Rivera", 
    bills: [770, 3750, 1100, 450],  
    tipsForEach: [], 
    finalBillTip: [],

    // Function Method 
	tipCalculator: function() { 

        // Iterate the array contents of 'bills' using for looop 
		for(let i = 0; i < this.bills.length; i++) {

            let percent; 
            let bill = this.bills[i];

            // tipsForEach = [ 154, 937.5, 110, 90 ]

            // Tip condition in three different restaurants 
			if (bill < 1000) {
                percent = .20; // return true where bill less than 1000 are 770 and 450 and their ouput array [0] = 154 & [3] = 90
                 
			} else if (bill >= 1000 && bill <= 3000) {
                percent = .10; // return true where bill greater than or equal to 1000 & bill less than or equal to 3000 the output of this condition will be array [2] = 110
                
			} else if (bill > 3000) {
                percent = .25; // return true where bill greater than 3000 the ouput of this is array [1] = 937.5            
                
			} else {
                return "Upon calculation of tip"; 
            }

            // Computation for tipsForEach & finalBillTip
            this.tipsForEach[i] = bill * percent;  
            this.finalBillTip[i] = bill + bill * percent; 

            /** How it works the equation of computing tipsForEach & finalBill tip**/ 
            // this.tipsForEach[i] = ?  || this.finalBillTip[i] = ? 
            // Note: bill is equal to this.bills[i] where 'i' stand to iterate inside array of "bills"
            // Solution: 
                // Evaluate: tipsForEach and finalBillTip     
                
                /*this.tipsForEach[i] = bill * percent */
                //     this.tipsForEach[0] = 770 * 20%  > 154                                  
                //     this.tipsForEach[1] = 3750 * 25%  > 937.5
                //     this.tipsForEach[2] = 1100 * 10%  > 110   
                //     this.tipsForEach[3] = 450 * 20%  >  90       
                
                /* this.finalBillTip[i] = bill + bill * percent (Use the PEMDAS rule) */
                //     this.finalBillTip[0] = [770 + (770 * 20%)] > 924                                   
                //     this.finalBillTip[1] = [3750 + (3750 * 25%)] > 4,687.5
                //     this.finalBillTip[2] = [1100 + (1100 * 10%)] > 1,210
                //     this.finalBillTip[3] = [450 + (450 * 20%)] > 540
        }            
    }
}

// Calculate Average of Victor 
function totalAverage(tipsForEach){
    let totalTipsPaid = 0; 

    for(i = 0; i < tipsForEach.length; i++){
        totalTipsPaid = totalTipsPaid + tipsForEach[i]; 
        // How it works to get the totalTipsPaid 
            // Solution: totalTipsPaid = 0 + tipsForEach[0] > 154          NOTE: Add all the array numbers 
                                        //  0 + tipsForEach[1] > 937.5 
                                        //  0 + tipsForEach[2] > 110
                                        //  0 + tipsForEach[3] > 90 
                                        //      totalTipsPaid = 1,291.5 sum 
    }   
        return totalTipsPaid / tipsForEach.length; 
        // Computation to return the average 
           //  Solution: 1,291.5 / 4  NOTE: 4 = is the number of characters inside array of "tipsForEach" 
                     // average = 322.875                    
} 

/***************************************************** JOHN **************************************************/  
const tipTransactionTwo = {

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

    // Victor average = 322.875  John average = 180.8     
    // Comparison of highest family paid of average  
    function highestPaid(callback){
        if(callback(tipTransaction.tipsForEach) > callback(tipTransactionTwo.tipsForEach)){
            return `The highest average paid by the family of ${tipTransaction.name} is higher`; 
            //return "The highest average paid by the family of " + tipTransaction.name + " is higher";  
        
        } else if(callback(tipTransaction.tipsForEach) < callback(tipTransactionTwo.tipsForEach)){
            return "The highest average paid by the family of " + tipTransactionTwo.name + " is higher"; 
        
        }else {
            return "Both families are equal paid."
        }
    }


/** VICTOR Print Ouput **/
tipTransaction.tipCalculator(); 
console.log(tipTransaction);  
// Print With Average Victor 
tipTransaction["average"] = totalAverage(tipTransaction.tipsForEach); 
console.log(tipTransaction);  // Output average = 322.875 

/** JOHN Print Ouput **/ 
tipTransactionTwo.tipCalculator(); 
console.log(tipTransactionTwo); 
// Print With Average John
tipTransactionTwo["average"] = totalAverage(tipTransactionTwo.tipsForEach); 
console.log(tipTransactionTwo); // Output average = 180.8 

// Comparison of two families with the highest paid 
console.log(highestPaid(totalAverage)); // Output: The highest average paid by the family of Victor Rivera is higher


