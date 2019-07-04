import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

let Error = (props) => (
  <div>
    Oops something went wrong 
    <div>Retry</div>
    <FontAwesomeIcon icon={faRedo} />
  </div>
)

export default Error;