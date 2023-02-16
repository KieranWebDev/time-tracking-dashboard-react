import { useState, useEffect } from 'react';
// components
import NameCard from './Components/NameCard';
import ActivityCard from './Components/ActivityCard';
// data
import data from './data/data.json';
// CSS
import './App.css';

function App() {
  const [userData, setUserData] = useState(data);
  console.log(data);

  return (
    <div className="dashboard-container">
      <NameCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </div>
  );
}

export default App;
