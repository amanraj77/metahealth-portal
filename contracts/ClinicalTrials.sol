// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./HealthToken.sol";

contract ClinicalTrials {
    struct Trial {
        string details;
        address sponsor;
        uint startDate;
        uint endDate;
        uint reward;  // Reward in HealthTokens for participation
    }

    struct Participant {
        address participant;
        bool isEnrolled;
    }

    Trial[] public trials;
    mapping(uint => Participant[]) public trialParticipants;

    HealthToken private token;

    constructor(address _tokenAddress) {
        token = HealthToken(_tokenAddress);
    }

    function createTrial(
        string memory details, 
        uint startDate, 
        uint endDate, 
        uint reward
    ) public {
        trials.push(Trial(details, msg.sender, startDate, endDate, reward));
    }

    function enrollInTrial(uint trialIndex) public {
        require(trialIndex < trials.length, "Invalid trial index.");
        trialParticipants[trialIndex].push(Participant(msg.sender, true));
    }

    function rewardParticipants(uint trialIndex) public {
        require(msg.sender == trials[trialIndex].sponsor, "Only sponsor can reward.");
        for (uint i = 0; i < trialParticipants[trialIndex].length; i++) {
            if (trialParticipants[trialIndex][i].isEnrolled) {
                token.transfer(trialParticipants[trialIndex][i].participant, trials[trialIndex].reward);
            }
        }
    }

    function getTrials() public view returns (Trial[] memory) {
        return trials;
    }

    function getTrialParticipants(uint trialIndex) public view returns (Participant[] memory) {
        return trialParticipants[trialIndex];
    }
}
