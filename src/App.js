import React, {useState} from 'react';
import './App.css';
const api = {
  key: '2b810a1878c74d39c25cb97d2d29f529',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
        <div className="searchbox">
          <input
            type='text'
            className='search-bar'
            placeholder='Search ...'
          />        
        </div>
        <div className="location-box">
          <div className="location">Windsor, CA</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
          15*C
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
      
    </div>
  );
}

export default App;