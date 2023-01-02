// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Box {
    string public name;
    uint public value;

    function initialize(string memory _name, uint _value) external {
        name = _name;
        value = _value;
    }

    function version() pure public virtual returns (string memory) {
        return 'v1!';
    }
}