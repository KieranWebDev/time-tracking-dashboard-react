// components
import NameCard from './Components/NameCard';
import ActivityCard from './Components/ActivityCard';
// CSS
import './App.css';

function App() {
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
