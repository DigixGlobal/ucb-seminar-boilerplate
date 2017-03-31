pragma solidity ^0.4.8;

import "@digix/cacp-contracts/contracts/ACOwned.sol";
import './Common.sol';

contract Boilerplate is Common, ACOwned {

  event FireEvent(uint256 indexed _id);

  uint256 public birthday;

  function Boilerplate(address _resolver) {
    resolver = _resolver;
    birthday = now;
    owner = msg.sender;
    init("boilerplate");
  }

  function fire_an_event(uint256 _event_id)
                         returns (bool _success)
  {
    _success = true;
    FireEvent(_event_id);

    return _success;
  }

  function get_age_in_days()
                           public
                           constant
                           returns (uint256 _age_in_days)
  {
    _age_in_days = (now - birthday) / 1 days;
    return _age_in_days;
  }

  function owner_check()
                       public
                       constant
                       returns (bool _is_owner)
  {

    _is_owner = (owner == msg.sender);

    return _is_owner;
  } 


}
