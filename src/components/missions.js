import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/mission/missionSlice';
import MissionChart from './missionChart';
import styles from '../styles/mission.module.css';

function Missions() {
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, [dispatch, missions]);

  if (isLoading) {
    return (
      <ul>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (error) {
    return (
      <ul>
        <h1>Something went wrong</h1>
      </ul>
    );
  }

  return (
    <table className={styles.missioncontainer}>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className={styles.invisible}>Blank</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionChart
            key={mission.id}
            itemProps={mission}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
