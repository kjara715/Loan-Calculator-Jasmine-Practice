window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  document.getElementById("loan-amount").defaultValue = 20000;
  document.getElementById("loan-years").defaultValue = 5;
  document.getElementById("loan-rate").defaultValue=5; 
  //loan rate is the %
  update();
  
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let theValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(theValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

//inside was values initially
function calculateMonthlyPayment(values)  {
  let valueArray=[];
  for(let value in values){
    valueArray.push(values[value]);
  }
  //getting the values from the object
  let p = valueArray[0]
   //corresponds to the amount
  let n = valueArray[1] * 12;
  //corresponds to the years
  let i = (valueArray[2]/100) / 12;
   //corresponds to the rate
  let monthlyPay = (p *i)/(1-Math.pow((1+i),-n));
  let monthlyPayString = monthlyPay.toFixed(2).toString();;
  //toFix chops down to decimal places, toString converts our number to string
  //will put the calculated value in the span unfer the Monthly Pay h3
 return monthlyPayString

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let payDisplay = document.querySelector('#monthly-payment');
  payDisplay.innerText=monthly;
}
