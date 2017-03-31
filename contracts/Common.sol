pragma solidity ^0.4.8;

import "@digix/cacp-contracts/contracts/ResolverClient.sol";
import "@digix/solidity-core-libraries/contracts/MathUtils.sol";

contract Common is ResolverClient {

  function add(uint256 _a, uint256 _b)
               public
               constant
               returns (uint256 _result)
  {
    _result = MathUtils.add(_a, _b);

    return _result;
  }

  function subtract(uint256 _a, uint256 _b)
                    public
                    constant
                    returns (uint256 _result)
  {
            
    _result = MathUtils.subtract(_a, _b);

    return _result;
  }
    
}
