//get user input and save to variables 
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const downPayment = document.getElementById('down-payment');

const calcButton = document.getElementById('btn-submit').addEventListener('click', calculatePayment);
const resetButton = document.getElementById('reset-form').addEventListener('click', reset());

function calculatePayment(){ 


//calculate the principal and address any down payments  loan - downpaymen
    let principle = parseFloat(amount.value) - parseFloat(downPayment.value);
    //convert interest from a % to a decimal(*100) then convert to monthly(/12
    let monthlyInterest = parseFloat(interest.value)/100 /12;
    
    //convert length of loan in years to months for the # of payments
    let totalPayments = parseFloat(years.value)*12;

    //formula (amount(1+monthlyInterest) ^totalPayments * monthlyInterest)/((1+monthlyInterest)^ totalPayments -1
    let x= Math.pow(1 + monthlyInterest,totalPayments);

    monthly = (principle * x * monthlyInterest)/(x-1);
    monthlyPayment=monthly.toFixed(2);
    document.getElementById('loan-payment').innerHTML= `$${monthlyPayment}/Month`
    console.log(monthlyPayment);
    
}



