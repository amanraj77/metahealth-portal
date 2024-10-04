import { ethers } from 'ethers';

// Define interfaces for the contract functions
interface CombinedContract {
  clinicalTrials: () => Promise<string>;
  healthToken: () => Promise<string>;
  marketplace: () => Promise<string>;
  medicalRecords: () => Promise<string>;
}

// Replace with your contract address and ABI
const contractAddress = "0x838F9b8228a5C95a7c431bcDAb58E289f5D2A4DC";
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
    "name": "healthToken",
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
    "name": "marketplace",
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
    "name": "medicalRecords",
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

let provider: ethers.providers.Web3Provider | undefined;
let contract: ethers.Contract | undefined;

declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider;
  }
}

export const initWeb3 = async (): Promise<void> => {
  if (typeof window !== 'undefined' && window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
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

// Combined contract method
export const combinedContract = (): CombinedContract => {
  const currentContract = getContract();
  return {
    clinicalTrials: () => currentContract.clinicalTrials(),
    healthToken: () => currentContract.healthToken(),
    marketplace: () => currentContract.marketplace(),
    medicalRecords: () => currentContract.medicalRecords(),
  };
};
