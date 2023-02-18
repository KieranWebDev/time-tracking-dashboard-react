import React from 'react';

import './NameCard.css';
import userPic from '../images/image-jeremy.png';

function NameCard(props) {
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
            <button
              onClick={() => props.changeDisplayedData('daily')}
              className="time-button"
              style={
                props.current === 'daily'
                  ? { color: 'white' }
                  : { color: '#7078c9' }
              }
            >
              Daily
            </button>
          </li>
          <li>
            <button
              onClick={() => props.changeDisplayedData('weekly')}
              className="time-button"
              style={
                props.current === 'weekly'
                  ? { color: 'white' }
                  : { color: '#7078c9' }
              }
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              onClick={() => props.changeDisplayedData('monthly')}
              className="time-button"
              style={
                props.current === 'monthly'
                  ? { color: 'white' }
                  : { color: '#7078c9' }
              }
            >
              Monthly
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default NameCard;
