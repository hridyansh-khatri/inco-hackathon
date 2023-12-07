export const EncryptedSwap = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "mockSwapAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "token1Part1",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "token1Part2",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "token1Part3",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "token1Part4",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "token1Part5",
				"type": "bytes"
			}
		],
		"name": "executeTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mockUniswap",
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
		"inputs": [],
		"name": "mockWETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const;