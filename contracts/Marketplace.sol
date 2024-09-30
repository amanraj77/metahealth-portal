// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./HealthToken.sol";

contract Marketplace {
    struct Service {
        string name;
        uint price; // Price in HealthTokens
        address provider;
    }

    Service[] public services;
    HealthToken private token;

    constructor(address _tokenAddress) {
        token = HealthToken(_tokenAddress);
    }

    function addService(string memory name, uint price) public {
        services.push(Service(name, price, msg.sender));
    }

    function purchaseService(uint serviceIndex) public {
        require(serviceIndex < services.length, "Invalid service index.");
        Service memory service = services[serviceIndex];
        require(token.transferFrom(msg.sender, service.provider, service.price), "Token transfer failed.");
    }

    function getServices() public view returns (Service[] memory) {
        return services;
    }
}
