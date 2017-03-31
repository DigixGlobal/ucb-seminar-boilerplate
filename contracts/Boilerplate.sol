pragma solidity ^0.4.8;

import './Common.sol';

contract Boilerplate is Common {

  event FireEvent(uint256 indexed _id);

  uint256 public birthday;

  function Boilerplate(address _resolver) {
    resolver = _resolver;
    birthday = now;
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

  


}
