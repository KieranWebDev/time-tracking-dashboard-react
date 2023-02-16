import './ActivityCard.css';
// icons
import playIcon from '../images/icon-play.svg';
import excerciseIcon from '../images/icon-exercise.svg';
import socialIcon from '../images/icon-social.svg';
import selfCareIcon from '../images/icon-self-care.svg';
import studyIcon from '../images/icon-study.svg';
import workIcon from '../images/icon-work.svg';

import ellipsisIcon from '../images/icon-ellipsis.svg';

function ActivityCard() {
  return (
    <section className="dashboard-item play-section">
      <div className="background-pic">
        <img className="play-icon" src={playIcon} alt="play-icon" />
      </div>
      <div className="dashboard-item-text">
        <div className="flex-top">
          <h2 className="activity-title">placehldr</h2>
          <img src={ellipsisIcon} alt="ellipsis" />
        </div>
        <div className="flex-bottom">
          <h3 className="time-amount">15</h3>
          <p className="previous-time-amount">Last Week - 7hrs</p>
        </div>
      </div>
    </section>
  );
}
export default ActivityCard;
