const assert = require('assert');
const ganache = require('ganache-cli');
const { describe } = require('mocha');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

/// Code For Accounts
// class Car{
//     park(){
//         return "Yeahh"
//     }
//     drive(){
//         return "Noooo"
//     }
// }
// beforeEach(async ()=>{
//     let acc=await web3.eth.getAccounts()
// console.log(acc)
// })
// describe('Car', () => {
//     let car;

// it('car park',()=>{
//    // console.log("hello")
//    // assert.equal(car.park(),'Yeahh')
// })

// })
