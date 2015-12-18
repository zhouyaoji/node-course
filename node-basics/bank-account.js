// Some comment
var account = {
    balance: 0
};

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

deposit(account, 230);
withdraw(account, 110);
console.log(getBalance(account));
deposit(account, 319);
withdraw(account, 287);
console.log(getBalance(account));



