import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/mission.module.css';

function MyProfile() {
  const { missions } = useSelector((store) => store.missions);
  const bookedMissions = missions.filter((mission) => mission.reserved === true);

  const Rockets = useSelector((store) => store.rocket.rocket);
  const bookedRockets = Rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className={styles.profiledata}>
      <div className={styles.eachprofiledata}>
        <p>My Missions</p>
        <table className={styles.profilesection}>
          {bookedMissions.map((mission) => (
            <tr key={mission.id}>
              <td className={styles.profilesectiontd}>{mission.name}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles.eachprofiledata}>
        <p>My Rockets</p>
        <table className={styles.profilesection}>
          {bookedRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td className={styles.profilesectiontd}>{rocket.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
