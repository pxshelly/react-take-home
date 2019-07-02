import React from 'react';
import Video from './Video.jsx';

let MediaList = (props) => (
  <div>
    {props.campaign.medias.map((video, i) =>
      <Video video={video} key={i} />
    )}
  </div>
)

export default MediaList;