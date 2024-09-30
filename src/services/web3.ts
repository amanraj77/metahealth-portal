import { ethers } from 'ethers';

// Define interfaces for the contract functions
interface CombinedContract {
  clinicalTrials: () => Promise<string>;
  healthToken: () => Promise<string>;
  marketplace: () => Promise<string>;
  medicalRecords: () => Promise<string>;
}

// Replace with your contract address and ABI
const contractAddress = "0xE5f2A565Ee0Aa9836B4c80a07C8b32aAd7978e22";
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "clinicalTrials",
		"outputs": [
			{
				"internalType": "contract ClinicalTrials",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "healthToken",
		"outputs": [
			{
				"internalType": "contract HealthToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketplace",
		"outputs": [
			{
				"internalType": "contract Marketplace",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "medicalRecords",
		"outputs": [
			{
				"internalType": "contract MedicalRecords",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
        as const;

let provider: ethers.BrowserProvider | undefined;
let contract: ethers.Contract | undefined;

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const initWeb3 = async (): Promise<void> => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
        provider = new ethers.BrowserProvider(window.ethereum);
        try {
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            contract = new ethers.Contract(contractAddress, abi, signer);
            console.log("Web3 initialized and contract instance created.");
        } catch (error) {
            console.error("Error initializing web3:", error);
            alert('Could not connect to MetaMask. Please ensure you are logged in.');
        }
    } else {
        alert('Please install MetaMask!');
    }
};

export const getContract = (): ethers.Contract => {
    if (!contract) {
        throw new Error("Contract is not initialized. Call initWeb3() first.");
    }
    return contract;
};

// Optional: If you want to have a combinedContract method
export const combinedContract = (): CombinedContract => {
    const currentContract = getContract();
    return {
        clinicalTrials: () => currentContract.clinicalTrials(),
        healthToken: () => currentContract.healthToken(),
        marketplace: () => currentContract.marketplace(),
        medicalRecords: () => currentContract.medicalRecords(),
    };
};
