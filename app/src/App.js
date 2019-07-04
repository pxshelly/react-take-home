import React from 'react';
import Campaign from './Campaign';
import axios from 'axios';
import Error from './Error.jsx';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      hasError: false
    }
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
    .then(response => {
      console.log(response.data.campaigns);
      this.setState({
        campaigns: response.data.campaigns,
        hasError: false
      })
    })
    .catch(error => {
      this.setState({hasError: true});
    })
  }

  componentDidMount() {
    this.refresh();
  }
  
  render() {
    let body = '';
    if (this.state.hasError) {
      body = <Error />
    } else {
      body = this.state.campaigns.map((campaign, i) => 
        <Campaign campaign={campaign} key={i}/>
      )
    }
    return (
      <div className="App">
        {body}
      </div>
    );
  }
}

export default App;
