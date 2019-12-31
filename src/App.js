import React from 'react';

import './App.css';

import RecordsList from './components/records-list/records-list.component';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <RecordsList />
      </div>
    );
  }
}

export default App;
