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