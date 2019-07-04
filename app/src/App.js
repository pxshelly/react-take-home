import React from 'react';
import Campaign from './Campaign';
import axios from 'axios';
import Error from './Error.jsx';
import NavBar from './NavBar.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      hasError: false
    }
    this.yStart = 0;
    this.yStop = 0;
    this.refresh = this.refresh.bind(this);
    this.updateStartCoordinates = this.updateStartCoordinates.bind(this);
    this.updateEndCoordinates = this.updateEndCoordinates.bind(this);
    this.checkPullDown = this.checkPullDown.bind(this);
  }

  updateStartCoordinates(e) {
    this.yStart = e.changedTouches[0].screenY;
  }

  updateEndCoordinates(e) {
    this.yStop = e.changedTouches[0].screenY;
    this.checkPullDown(this.yStop-this.yStart);
  }

  checkPullDown(deltaY) {
    if(deltaY >= 50 && window.scrollY <= 0) {
      this.refresh();
    }
  }  

  refresh() {
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
    .then(response => {
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
    document.addEventListener('touchstart', (e) => this.updateStartCoordinates(e), false);
    document.addEventListener('touchend', (e) => this.updateEndCoordinates(e), false);
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
        <NavBar />
        {body}
      </div>
    );
  }
}

export default App;
