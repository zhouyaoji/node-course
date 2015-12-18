var crypto = require('crypto-js');

var secretKey = '123abc';

var secretMessage = {
  name: "Andrew",
  secretName: "007"
};
// JSON.stringify, JSON.parse

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log('Encrypted message: ' + encryptedMessage);

// Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log("Decrypted message: ");
console.log(decryptedMessage);
