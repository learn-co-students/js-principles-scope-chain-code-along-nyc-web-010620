var customerName = "bob"
const leastFavoriteCustomer = "will"

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase()
}

function setBestCustomer() {
   bestCustomer = "not bob";
}

function overWriteBestCustomer() {
   bestCustomer = "maybe bob"; 
}

// unsuccessfully tries to reassign the least favorite customer
// cannot change because we declared the least favorite customer as a constant
function changeLeastFavoriteCustomer() {
   leastFavoriteCustomer = "not will"; 
}

// unsuccessfully tries to declare favoriteCustomer with let two times
// had to comment out this function -- it breaks the rest of the tests
// function attemptTwoFavoriteCustomers() {
//    let favoriteCustomer = "sally"; 
//    let favoriteCustomer = "allie"; 
// }
