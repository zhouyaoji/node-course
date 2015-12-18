// Some comment
var accounts = [];
// var account = {
//    balance: 0;
//    username: 

function createAccount(account) {
   accounts.push(account);
   return account;
}

function getAccount(username) {
  var found_account; 
  accounts.forEach(function (account) {
     if (account.username === username) {
         found_account =account;
      }
  });
  return found_account;
}

// deposit
function deposit(account, amount) {
  account.balance += amount;
}

// withdraw
function withdraw(account, amount) {
  account.balance -= amount;
}
// getBalance
function getBalance(account) {
  return account.balance;
}

var joe = { balance: 200, username: "Joe"};
var annie = { balance: 100, username: "Annie" };
createAccount(joe);
createAccount(annie);
deposit(joe, 200);
withdraw(annie,60);
console.log(getBalance(annie));
console.log(getBalance(joe));

console.log(getAccount("Joe"));
console.log(getAccount("Annie"));

