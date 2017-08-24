import React, { Component } from 'react';
import '../styles/App.css';

import EarthquakeInfo from './EarthquakeInfo.js';
import EarthquakeList from './EarthquakeList.js';



class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="title">
       <EarthquakeInfo/>
       <EarthquakeList/>
         <div className="Earthquakes!">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
