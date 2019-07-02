import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

let Video = (props) => (
  <div>
    <img src={props.video.cover_photo_url} alt=''/>
    <div>
      <FontAwesomeIcon icon={faLink} />
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  </div>
)

export default Video;