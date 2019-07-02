import React from 'react';

let Details = (props) => (
  <div>
    <div>{props.campaign.campaign_name}</div>
    <div><img src={props.campaign.campaign_icon_url} alt =''/></div>
    <div>{props.campaign.pay_per_install}</div>
</div>
)

export default Details;