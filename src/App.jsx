import React, { Component } from 'react';
// import logo from './logo.svg';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Woah cool bananas!
        </div>
        <div className='calendar'>
        <BigCalendar
      events={['myEventsList']}
      // startAccessor={moment().startOf('year')}
      // endAccessor={moment().endOf("year")}
    />
        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;


