var crypto = require('crypto-js');
var storage = require('node-persist');
storage.initSync();
var master = crypto.AES.encrypt(JSON.stringify('annie4you'),'michelle');
storage.setItemSync('master', master.toString());
