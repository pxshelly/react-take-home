import React from 'react';
import Campaign from './Campaign';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
  }
}

  componentDidMount() {
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then(response => {
        console.log(response.data.campaigns);
        this.setState({campaigns: response.data.campaigns})
      })
      .catch(error => {
        console.log(error);
      })
    }
  
  render() {
    const campaign = this.state.campaigns.map((campaign, i) => 
      <Campaign campaign = {campaign} key = {i}/>
    )
    return (
      <div className="App">
        {campaign}
      </div>
    );
  }
}

export default App;
