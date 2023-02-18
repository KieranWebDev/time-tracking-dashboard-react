import React from 'react';
import { useState } from 'react';
// components
import NameCard from './Components/NameCard';
import ActivityContainer from './Components/ActivityContainer';

// data
import data from './data/data.json';
// CSS
import './App.css';

function App() {
  const [current, setCurrent] = useState('weekly');
  const [previous, setPrevious] = useState('weekly');

  function changeDisplayedData(timeFrame) {
    setCurrent(timeFrame);
    setPrevious(timeFrame);
  }

  return (
    <div className="dashboard-container">
      <NameCard changeDisplayedData={changeDisplayedData} current={current} />
      <ActivityContainer data={data} current={current} previous={previous} />
    </div>
  );
}

export default App;
