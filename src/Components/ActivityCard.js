import React from 'react';

import './ActivityCard.css';

import ellipsisIcon from '../images/icon-ellipsis.svg';

function ActivityCard(props) {
  return (
    <section className="dashboard-item play-section">
      <div className="background-pic">
        <img className="play-icon" src={props.icon} alt="play-icon" />
      </div>
      <div className="dashboard-item-text">
        <div className="flex-top">
          <h2 className="activity-title">{props.title}</h2>
          <img src={ellipsisIcon} alt="ellipsis" />
        </div>
        <div className="flex-bottom">
          <h3 className="time-amount">{props.timeFrameCurrent}</h3>
          <p className="previous-time-amount">
            Last Week - {props.timeFramePrevious}
          </p>
        </div>
      </div>
    </section>
  );
}
export default ActivityCard;
