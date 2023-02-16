import './NameCard.css';
import userPic from '../images/image-jeremy.png';

function NameCard() {
  return (
    <header className="name-and-options-card-container">
      <div className="name-card">
        <img src={userPic} alt="user" />
        <div className="name-card-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="time-options-container">
        <ul>
          <li>
            <button className="time-button daily">Daily</button>
          </li>
          <li>
            <button className="time-button weekly">Weekly</button>
          </li>
          <li>
            <button className="time-button monthly">Monthly</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default NameCard;
