'use strict';
const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate(
  '7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf'
);

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const VarsCoin = new Blockchain();

// Mine first block
VarsCoin.minePendingTransactions(myWalletAddress);

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.sign(myKey);
VarsCoin.addTransaction(tx1);

// Mine block
VarsCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.sign(myKey);
VarsCoin.addTransaction(tx2);

// Mine block
VarsCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(
  `Balance of varsier is ${VarsCoin.getBalanceOfAddress(myWalletAddress)}`
);

// Uncomment this line if you want to test tampering with the chain
// savjeeCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', VarsCoin.isChainValid() ? 'Yes' : 'No');


// let varsCoin = new Blockchain();
// //part4
// const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
// tx1.signTransaction(myKey);
// varsCoin.addTransaction(tx1);

// console.log('\n Starting the miner...');
// varsCoin.minePendingTransactions(myWalletAddress);

// console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress(myWalletAddress));
// varsCoin.chain[1].transactions[0].amount = 1;

// console.log('Is chain valid?', varsCoin.isChainValid());

//part3

// varsCoin.createTransaction(new Transaction('address1', 'address2', 100));
// varsCoin.createTransaction(new Transaction('address2', 'address1', 50));

// console.log('\n Starting the miner...');
// varsCoin.minePendingTransactions('varsiers-address');

// console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress('varsiers-address'));

// console.log('\n Starting the miner again...');
// varsCoin.minePendingTransactions('varsiers-address');

// console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress('varsiers-address'));

// console.log('\n Starting the miner again...');
// varsCoin.minePendingTransactions('varsiers-address');

// console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress('varsiers-address'));

//part1
// varsCoin.addBlock(new Block(1, "10/02/2023", { amount: 4}));
// varsCoin.addBlock(new Block(2, "15/03/2023", { amount: 10}));

// // console.log(JSON.stringify(varsCoin, null, 4));
// console.log('Is blockchain valid?' + varsCoin.isChainValid());

// varsCoin.chain[1].data = {amount: 100};
// varsCoin.chain[1].hash = varsCoin.chain[1].calculateHash();

// console.log('Is blockchain valid?' + varsCoin.isChainValid());

//part2
// console.log("Mining block 1...");
// varsCoin.addBlock(new Block(1, "10/01/2023", { amount: 4}));
// console.log("Mining block 2...");
// varsCoin.addBlock(new Block(2, "15/02/2023", { amount: 10}));