import React from 'react';

let Campaign = (props) => (
  <div>
    <div><img src={props.campaign.campaign_icon_url} alt =''/></div>
    <div>{props.campaign.campaign_name}</div>
    <div>{props.campaign.pay_per_install}</div>
  </div>
)

export default Campaign;