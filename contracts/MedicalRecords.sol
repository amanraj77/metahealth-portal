// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MedicalRecords {
    struct Record {
        string data;
        address owner;
        uint timestamp;
    }

    mapping(address => Record[]) private records;
    mapping(address => mapping(address => bool)) private accessControl; // owner => (provider => access)

    function addRecord(string memory data) public {
        records[msg.sender].push(Record(data, msg.sender, block.timestamp));
    }

    function getRecords() public view returns (Record[] memory) {
        return records[msg.sender];
    }

    function grantAccess(address provider) public {
        accessControl[msg.sender][provider] = true;
    }

    function revokeAccess(address provider) public {
        accessControl[msg.sender][provider] = false;
    }

    function getRecordsForProvider(address owner) public view returns (Record[] memory) {
        require(accessControl[owner][msg.sender], "No access to view records.");
        return records[owner];
    }
}
