// erupt humor dad guide diesel surface evoke mind easily rural burger scissors


const Web3 = require('web3')


const address = '0x3B5916De8a4a525926Ad8b20d832fE4c8e8BC919'
const abi = [ { "constant": true, "inputs": [], "name": "creator", "outputs": [ { "name": "", "type": "address", "value": "0x4c67eb86d70354731f11981aee91d969e3823c39" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "creatorConfirm", "outputs": [ { "name": "", "type": "bool", "value": true } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_inputKey", "type": "string" } ], "name": "accept", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "cancelDeal", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [ { "name": "", "type": "uint256", "value": "1498922735" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "hashSum", "outputs": [ { "name": "", "type": "bytes32", "value": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "recipientSum", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "attachements", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "creatorSum", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "recipient", "outputs": [ { "name": "", "type": "address", "value": "0x11824724d144ec3f9bf2b90a4f8010f1be7892e6" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "accepted", "outputs": [ { "name": "", "type": "bool", "value": true } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "arbiterPool", "outputs": [ { "name": "", "type": "address", "value": "0x3079833877389cf16eb9d2a150e79ccaf9c2d89c" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "confirm", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "creatorDeposit", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [ { "name": "", "type": "uint256", "value": "1498922135" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "recipientConfirm", "outputs": [ { "name": "", "type": "bool", "value": true } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "recipientDeposit", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "finished", "outputs": [ { "name": "", "type": "bool", "value": true } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "commission", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_winner", "type": "address" } ], "name": "decide", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "arbiter", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "_creator", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;creator", "template": "elements_input_address", "value": "0x4C67EB86d70354731f11981aeE91d969e3823c39" }, { "name": "_recipient", "type": "address", "index": 1, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;recipient", "template": "elements_input_address", "value": "0x11824724d144Ec3F9bF2b90A4f8010F1Be7892e6" }, { "name": "_attachements", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;attachements", "template": "elements_input_string", "value": "" }, { "name": "_start", "type": "uint256", "index": 3, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;start", "template": "elements_input_uint", "value": "0" }, { "name": "_end", "type": "uint256", "index": 4, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;end", "template": "elements_input_uint", "value": "0" }, { "name": "_hashSum", "type": "bytes32", "index": 5, "typeShort": "bytes", "bits": "32", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;hash Sum", "template": "elements_input_bytes", "value": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470" }, { "name": "_creatorSum", "type": "uint256", "index": 6, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;creator Sum", "template": "elements_input_uint", "value": "1000000000000000000" }, { "name": "_recipientSum", "type": "uint256", "index": 7, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;recipient Sum", "template": "elements_input_uint", "value": "0" }, { "name": "_poolAddress", "type": "address", "index": 8, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;pool Address", "template": "elements_input_address", "value": "0x3079833877389Cf16Eb9D2A150E79CCaF9C2d89C" } ], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "creator", "type": "address" }, { "indexed": true, "name": "sender", "type": "address" }, { "indexed": true, "name": "now", "type": "uint256" } ], "name": "Confirmation", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "creator", "type": "address" }, { "indexed": true, "name": "sender", "type": "address" }, { "indexed": true, "name": "now", "type": "uint256" } ], "name": "Finish", "type": "event" } ]


const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const Contract = web3.eth.contract(abi)
const contractInstance = Contract.at(address)


// contractInstance.createDeal({
//   creator: '0x00C2A3182E2426b2Ff23cF9750F34ffA7A49168D',
//   recipient: '0x4C67EB86d70354731f11981aeE91d969e3823c39',
//   attachements: 'smth', // attachments!
//   openTime: 0,
//   closeTime: 0,
//   hashSum: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470', // remove
//   creatorSum: 0.00001 * 10 ^ 15, // check method toWei - convert to ETH from WEI
//   recipientSum: 0, // remove
//   poolAddress: '0x3079833877389Cf16Eb9D2A150E79CCaF9C2d89C', // arbitration list
// }, () => {
//   console.log(444444)
// })

console.log(web3.toWei(0.001))