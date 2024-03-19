// Write your solution in this file!
var customerName = 'bob';

function nameCustomer() {
    return customerName;
}

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
   return customerName;
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

console.log(bestCustomer);

const leastFavoriteCustomer = 'someone' 

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else';
    return leastFavoriteCustomer;
}

console.log(leastFavoriteCustomer);