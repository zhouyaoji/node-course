#!/usr/bin/env node
console.log("Starting password manager...");
var storage = require('node-persist');
var crypto = require('crypto-js');
var prompt = require('prompt');
var _ = require('underscore');
storage.initSync({
  dir: '/Users/jcatera/bin/pw-man/persist',
  stringify: JSON.stringify,
  parse: JSON.parse,
  encoding: 'utf8',
  continuous: true
});
var account;

var argv = require('yargs')
    .command('create', 'Specify the name of the account', function(yargs) {
       yargs.options({ 
           name: { 
              demand: true,
              alias: 'n',
              description: 'Your account. For example: -n Facebook',
              type: 'string'
           },
           username: {
              demand: true,
              alias: 'u',
              description: "The username for your account",
              type: 'string'
           },
           password: {
             demand: true,
             alias: 'p',
             description: "The password for the account",
             type: 'string'
           },
           master: {
             demand: true,
             alias: 'm',
             description: "The master password to decrypt account info.",
             type: "string"
           }
       }).help('help', 'h'); 
    })
    .command('show', "Show accounts", function(yargs) {
       yargs.options({
           master: {
             demand: true,
             alias: 'm',
             description: "The master password to decrypt account.",
             type: "string"
           }
       }).help("help");         
    })
    .command('master', "Get the master password.", function(yargs) {
      yargs.option({
      }).help("help");
    }) 
    .command('get', 'Get the account', function(yargs) {
       yargs.options({ 
           name: { 
              demand: true,
              alias: 'n',
              description: 'The name of the account, such as "Facebook"',
              type: 'string'
           },
           master: {
             demand: true,
             alias: 'm',
             description: "The master password to decrypt account info.",
             type: "string" 
           },
        }).help('help');
    }) 
    .command('delete', 'Delete the account', function(yargs) {
        yargs.options({
           name: {
             demand: true,
             alias: 'n',
             description: "The name of the account",
             type: "string"
           },
           master: {
             demand: true,
             alias: 'm',
             description: "The master password to decrypt account info.",
             type: "string"
           },
            username: {
              demand: true,
              alias: 'u',
              description: "The username for your account",
              type: 'string'
           },
           password: {
             demand: true,
             alias: 'p',
             description: "The password for the account",
             type: 'string'
           }
       }).help("help", "h"); 
    })
    .help('help')
    .alias('h', 'help')
    .argv;
var command = argv._[0];
var account;

if(argv._.length==0) {
   help();
}
function help() {
  console.log("Usage: password-manager <get|show|create|help> [options]");
  process.exit(1);

}
function createAccount (account, master) {
   
   var accounts = getAccounts(master);
   if (typeof accounts === 'undefined') {
      accounts = [];
   } 
   var name = account.name;
   account.name = name.toLowerCase();
   accounts.push(account);
   saveAccounts(accounts, master);
   return account;
}

function getAccount(accountName, master) {
 accountName = accountName.toLowerCase();
 var accounts = getAccounts(master);
  var no_accounts = accounts.length;
  var matchedAccount;
  for(var i = 0; i < no_accounts; i++) {
      if(accounts[i]) {
         if(accounts[i].name === accountName) {
            matchedAccount = accounts[i];
         }
      }
  }
  return matchedAccount; 
}

function getAccounts(master) {
  // use getItemSync to fetch accounts
  var encryptedAccounts = storage.getItemSync('accounts');
  var accounts = []
  if (typeof encryptedAccounts !== 'undefined') {
    var bytes = crypto.AES.decrypt(encryptedAccounts, master);
    accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
    //accounts = JSON.parse(bytes.toString());
  }
  return accounts;
}
function getMaster() {
  console.log("To get your master password, you need to answer the following question.");
  console.log("What is your daughter's name?"); 
  var name;
  var master;
  prompt.start();
  prompt.get(['name'], function (err, result) {
    if (err) { console.log("We got the error " + err); }
    name = result.name.toLowerCase();
    try {
      var encryptedMaster = storage.getItemSync('master');
      if (typeof encryptedMaster !== 'undefined') {
        var bytes = crypto.AES.decrypt(encryptedMaster, name);
        master = JSON.parse(bytes.toString(crypto.enc.Utf8));
      } else {
        console.log("Sorry, no master has been set."); 
        process.exit(1);
      }
    } catch(e) {
      console.log("We could not retrieve your master password.");
      process.exit(1);
    }
    console.log("Your master password is '" + master + "'.");
  });
}
function saveAccounts(accounts, master) {
  var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts),master);
  storage.setItemSync('accounts', encryptedAccounts.toString());
  return accounts;
}
function showAccounts(master) {
   var accounts = getAccounts(master);
   var no_accounts = accounts.length;
   console.log("Here are the available accounts: \n");
   for(var i = 0; i < no_accounts; i++) {
      console.log(" - " + accounts[i].name);
   }
   console.log();
}
function deleteNulls(accounts, master) {
   var accounts_len = accounts.length;
   var clean_accounts;
   clean_accounts  = _.compact(accounts);
   for (var i = 0; i < accounts_len; i++) {
           if(!accounts[i]) {
             console.log(accounts[i]);
           }
    }
    saveAccounts(clean_accounts, master);
}
function deleteAccount(name, username, password, master) {
   var matchedAccount = getAccount(name, master);   
   var accounts = getAccounts(master);
   var accounts_len = accounts.length;
   var clean_accounts;
   if (matchedAccount) {
     if (matchedAccount.password === password && matchedAccount.username === username) {
        for (var i = 0; i < accounts_len; i++) {
           if(accounts[i]) {
              if(accounts[i].name === name) {
                  clean_accounts = _.without(accounts,accounts[i]);
                  break;
               } 
           } 
        }
        saveAccounts(clean_accounts, master);
        console.log("The account " + name + " has been removed.");
     } else {
        console.log("The credentials given for the account " + name + " are not correct. Run 'pw get -n " + name + " -m <master>'.");
     }
  } else {
     console.log("The account " + name + " doesn't exist.");
  }
}
if (command === 'create') {
  try {
     account = { name: argv.name, username: argv.username, password: argv.password };
     createAccount(account, argv.master);
     console.log("Created the account '" + account.name + "' for " + account.username + ".");
  } catch (e) {
     console.log("Error: could not create account. Try again and make sure your master password is correct.")
  }
} else if (command === 'get') {
  try {
     account = getAccount(argv.name, argv.master);
     
    if(typeof account === 'undefined') {
      console.log("Account not found.");
    } else {
       console.log("Account found. \nAccount: " + account.name + "\nUsername: " + account.username + 
       "\nPassword: " + account.password);
    }
   } catch(e) {
     console.log("Error: could not get account. Try again and make sure your master password is correct.")
   }
} else if (command === 'show') {
  showAccounts(argv.master);
} else if (command === 'master') {
  getMaster();
} else if (command === 'delete') {
  deleteAccount(argv.name, argv.username, argv.password, argv.master);
}
