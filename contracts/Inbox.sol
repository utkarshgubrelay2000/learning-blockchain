pragma solidity ^0.8.0;

contract Inbox {
    bytes32 public message;
    function setMessage(bytes32 imesa)public{
        message=imesa;
    }
}