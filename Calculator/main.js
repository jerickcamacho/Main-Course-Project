/*CREATING A VARIABLE QUERY SELECTOR*/
const display = document.querySelector('.calculator_display'); // call elements of .calculator_display 
const calculator = document.querySelector('.calculator'); // call element of .calculator 
const keys = document.querySelector('.calculator_keys'); // call the elements of .calculator_keys

//parseFloat - converts a string into a number with decimal places
const calculate = (n1, operator, n2) => {
const firstNum = parseFloat(n1)
const secondNum = parseFloat(n2)
if (operator === 'add') 
return firstNum + secondNum

if (operator === 'subtract') 
return firstNum - secondNum

if (operator === 'multiply') 
return firstNum * secondNum
  
if (operator === 'divide') 
return firstNum / secondNum
}

/* BUILDING THE HAPPY PATH */
// Checking the Keys Selector 
keys.addEventListener('click', Event => {  /* Clicked EventListner */
  if (Event.target.matches('button')){  // //The matches() checking the button element if match

    /* We created a varibales "key" , "action", "keyContent", "displayedNum" */
    const key = Event.target; // Clicked keys         
    const action = key.dataset.action; // Execute the data-action   dataset is a native property
    const keyContent = key.textContent; // the content of key Event.target  (We can get these two values through the textContent property of the clicked key and .calculator__display)
    const displayedNum = display.textContent; // Output display 
    const previousKeyType = calculator.dataset.previousKeyType; // contains the data attributes

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')); 

     /* Number keys */ // Consecutive action consecutive calculations 99+1+2+3+4+5= should return 114 Received: "9"
     if(!action){
       
      
       if(displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'){
         display.textContent = keyContent;  // Single keyContent
       } else{
          display.textContent = displayedNum + keyContent; // Multiple key keyContent, appending
         }
         calculator.dataset.previousKeyType = 'number'; // Pwede na magdouble click ang zero like 20 + 40,  tells if the previous key is a number
     }

     /* Decimal key */
     if(action === 'decimal'){

      if(!displayedNum.includes('.') && previousKeyType !== "operator" ){
        display.textContent = displayedNum + '.';
        console.log("inside if");

      } else if(previousKeyType === 'operator' || previousKeyType === 'calculate' ){
          display.textContent = '0.'
          console.log("inside else if");
        }
        calculator.dataset.previousKeyType = 'decimal'  
     } 

     /* Operator key */
     if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
       const firstValue = calculator.dataset.firstValue;  // calculated value will be first value for the new calculation
       const operator = calculator.dataset.operator; 

       const secondValue = displayedNum;  // If no calculations, set displayedNum as the firstValue
       const previousKeyType = calculator.dataset.previousKeyType; 
       

        
       if (firstValue && operator && previousKeyType !== 'operator'  && previousKeyType !== 'calculate'){ // after pressing an operator key, new number key pressed will be displayed,  // after the calculation (pressing =), new number key pressed will be displayed
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;  

        // Update calculated value as firstValue
        calculator.dataset.firstValue = calcValue;
  
       } else {
        // If there are no calculations, set displayedNum as the firstValue
         calculator.dataset.firstValue = displayedNum;
         }
         key.classList.add('is-depressed'); // highlighted when pressed
          // Add custom attribute
         calculator.dataset.previousKeyType = 'operator'; // tells if the previous key is an operator
         calculator.dataset.operator = action; // to store operator
     }  
     /* Clear key */
     if (action === 'clear') {
      if (key.textContent === 'CE' ) {
        calculator.dataset.firstValue = '';
        calculator.dataset.modValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
      } 
        display.textContent = 0;
        calculator.dataset.previousKeyType = 'clear'; 
        key.textContent = 'AC';
    }
     if(action !== 'clear') {
      const clearButton = calculator.querySelector('[data-action=clear]')
      clearButton.textContent = 'CE';
    }

    /* Equal key */
    if (action === 'calculate') {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayedNum;
      const previousKeyType = calculator.dataset.previousKeyType;
      if (firstValue) {
          if (previousKeyType === 'calculate') {
              firstValue = displayedNum;
              secondValue = calculator.dataset.modValue;
          }
          display.textContent = calculate(firstValue, operator, secondValue);
      }
      // Set modValue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'calculate';
  }
      
  }
})