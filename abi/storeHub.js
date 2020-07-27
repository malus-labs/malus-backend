const storeHubABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_ensAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "BalanceUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CollateralGenerated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CollateralReleased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "collateralRelief",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "avaiableFunds",
				"type": "uint256"
			}
		],
		"name": "CollateralReliefUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string[6]",
				"name": "metaData",
				"type": "string[6]"
			}
		],
		"name": "MetaDataUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "approvalAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum StoreHub.PermissionType",
				"name": "permisionType",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			}
		],
		"name": "PermissionUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "expireTime",
				"type": "uint256"
			}
		],
		"name": "StakeUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "store",
				"type": "address"
			}
		],
		"name": "StoreCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "collateralGeneratedEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "collateralReleasedEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_collateralRelief",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_avaiableFunds",
				"type": "uint256"
			}
		],
		"name": "collateralReliefEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deployStore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ensSmartContract",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "firstStoreAddress",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_store",
				"type": "address"
			}
		],
		"name": "isStoreValid",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "malusTokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[6]",
				"name": "_metaData",
				"type": "string[6]"
			}
		],
		"name": "metaDataEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "updateBalanceEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_approvalAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isApproved",
				"type": "bool"
			}
		],
		"name": "updatePermissonEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_expireTime",
				"type": "uint256"
			}
		],
		"name": "updateStakeEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
module.exports = storeHubABI;
