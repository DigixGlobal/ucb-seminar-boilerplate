pragma solidity ^0.4.8;

import './Common.sol';

contract Boilerplate is Common {

  function Boilerplate(address _resolver) {
    resolver = _resolver;
    init("boilerplate");
  }
  


}
