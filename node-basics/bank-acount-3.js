var accounts = [];

function createAccount(account) {
   accounts.push(account);
   return account;
}

function getAccount(username) {
  var found_account; 
  var no_accounts = accounts.length;
  for (i = 0; i < no_accounts; i++) {
    if (accounts[i].username == username) {
       found_account = accounts[i];
    }
  }
  return found_account;
}

// deposit
function deposit(account, amount) {
  // Only accept a number, use typeof
  if (typeof amount === "number") {
    account.balance += amount;
  } else {
    console.log("Deposit not accepted because of an invalid amount.");
  }
}

// withdraw
function withdraw(account, amount) {
  if (typeof amount === "number") {
      account.balance -= amount;
  } else {
      console.log("Withdraw not made because of an invalid amount.");
  }
}
// getBalance
function getBalance(account) {
  return account.balance;
}
function createBalanceGetter(account) {
  return function() {
    return account.balance;
  }
}
// Create account
// Use valid and invalid amounts
// Create an instance of closure
var myAccount = { balance: 0, username: "Joe" };
createAccount(myAccount);
console.log(getBalance(myAccount));
deposit(myAccount, 500);
console.log(getBalance(myAccount));
withdraw(myAccount, "joe");
withdraw(myAccount, 250);
var getMyBalance = createBalanceGetter(myAccount);
console.log(getMyBalance());
deposit(getAccount("Joe"), "Money");


