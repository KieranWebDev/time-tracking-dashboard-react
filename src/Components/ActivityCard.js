import './ActivityCard.css';
import playIcon from '../images/icon-play.svg';
import ellipsisIcon from '../images/icon-ellipsis.svg';

function ActivityCard() {
  return (
    <section class="dashboard-item play-section">
      <div class="background-pic">
        <img class="play-icon" src={playIcon} alt="play-icon" />
      </div>
      <div class="dashboard-item-text">
        <div class="flex-top">
          <h2 class="activity-title">placehldr</h2>
          <img src={ellipsisIcon} alt="ellipsis" />
        </div>
        <div class="flex-bottom">
          <h3 class="time-amount">15</h3>
          <p class="previous-time-amount">Last Week - 7hrs</p>
        </div>
      </div>
    </section>
  );
}
export default ActivityCard;
