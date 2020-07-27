const Web3 = require("web3")
const storeHubABI = require("../abi/storeHub")

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else { 
    //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));
}

//web3.eth.defaultAccount = web3.eth.accounts[0]; 
var storeHub = new web3.eth.Contract(storeHubABI, '0xaD97c8AcaddFDdBA44cf2896f252A37E487FAE25');

storeHub.events.StoreCreated ({}, function(error, result) {
    if (!error) {
      console.log(result);
    } else {
      console.log(error);
    }
});