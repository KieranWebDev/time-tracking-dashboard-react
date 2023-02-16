import './NameCard.css';
import userPic from '../images/image-jeremy.png';

function NameCard() {
  return (
    <header class="name-and-options-card-container">
      <div class="name-card">
        <img src={userPic} alt="user" />
        <div class="name-card-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div class="time-options-container">
        <ul>
          <li>
            <button autofocus class="time-button daily">
              Daily
            </button>
          </li>
          <li>
            <button class="time-button weekly">Weekly</button>
          </li>
          <li>
            <button class="time-button monthly">Monthly</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default NameCard;
