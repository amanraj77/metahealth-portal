// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./HealthToken.sol";
import "./ClinicalTrials.sol";
import "./Marketplace.sol";
import "./MedicalRecords.sol";

contract CombinedDeployment {
    HealthToken public healthToken;
    ClinicalTrials public clinicalTrials;
    Marketplace public marketplace;
    MedicalRecords public medicalRecords;

    constructor(uint256 initialSupply) {
        healthToken = new HealthToken(initialSupply);
        clinicalTrials = new ClinicalTrials(address(healthToken));
        marketplace = new Marketplace(address(healthToken));
        medicalRecords = new MedicalRecords();
    }
}
//0xd7Ca4e99F7C171B9ea2De80d3363c47009afaC5F -- combined contract address 
