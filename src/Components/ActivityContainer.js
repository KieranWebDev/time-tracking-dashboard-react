import ActivityCard from './ActivityCard';

import playIcon from '../images/icon-play.svg';
import excerciseIcon from '../images/icon-exercise.svg';
import socialIcon from '../images/icon-social.svg';
import selfCareIcon from '../images/icon-self-care.svg';
import studyIcon from '../images/icon-study.svg';
import workIcon from '../images/icon-work.svg';

const icons = [
  workIcon,
  playIcon,
  studyIcon,
  excerciseIcon,
  socialIcon,
  selfCareIcon,
];

export default function ActivityContainer(props) {
  return (
    <>
      {props.data.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          timeFrameCurrent={activity.timeframes[props.current].current}
          timeFramePrevious={activity.timeframes[props.previous].previous}
          icon={icons[index]}
        />
      ))}
    </>
  );
}
