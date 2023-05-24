import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/mission/missionSlice';
import styles from '../styles/mission.module.css';

function MissionChart({ itemProps }) {
  const dispatch = useDispatch();
  return (
    <tr className={styles.tablerow}>
      <td>{itemProps.name}</td>
      <td>{itemProps.description}</td>
      <td>
        {!itemProps.reserved && (
          <button className={`${styles.nonMember} ${styles.missionstatus}`} type="button">NOT A MEMBER</button>
        )}
        {itemProps.reserved && (
          <button className={`${styles.member} ${styles.missionstatus}`} type="button">Active Member</button>
        )}
      </td>
      <td>
        {!itemProps.reserved && (
          <button
            className={`${styles.joinnow} ${styles.joinLeave}`}
            type="button"
            onClick={() => { dispatch(joinMission(itemProps.id)); }}
          >
            Join Mission
          </button>
        )}
        {itemProps.reserved && (
          <button
            className={`${styles.leavenow} ${styles.joinLeave}`}
            type="button"
            onClick={() => { dispatch(leaveMission(itemProps.id)); }}
          >
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
}

export default MissionChart;

MissionChart.propTypes = {
  itemProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
