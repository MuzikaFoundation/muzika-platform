pragma solidity ^0.4.21;

import "../zeppelin-solidity/contracts/ownership/Heritable.sol";

contract MuzikaCoinSavingsWallet is Heritable {

  event Sent(address indexed payee, uint256 amount, uint256 balance);
  event Received(address indexed payer, uint256 amount, uint256 balance);


  function MuzikaCoinSavingsWallet(uint256 _heartbeatTimeout) Heritable(_heartbeatTimeout) public {}
  
  /**
   * @dev wallet can receive funds.
   */
  function () public payable {
    Received(msg.sender, msg.value, this.balance);
  }

  /**
   * @dev wallet can send funds
   */
  function sendTo(address payee, uint256 amount) public onlyOwner {
    require(payee != 0 && payee != address(this));
    require(amount > 0);
    payee.transfer(amount);
    Sent(payee, amount, this.balance);
  }
}