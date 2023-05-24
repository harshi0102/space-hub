import React from 'react';
import { useSelector } from 'react-redux';
import { filterReservedMissions } from '../redux/mission/missionSlice';

export default function MyProfile() {
  const reservedMissions = useSelector(filterReservedMissions);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profilecontainer">
      <div>
        <h3>My Missions</h3>
        <div className="missioncontainer">
          <ul className="showmissions">
            {reservedMissions.map((e) => (
              <li key={e.mission_id} className="showitem">
                {e.mission_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>My Rockets</h3>
        <div>
          <table className="rocketcontainer">
            <tbody className="rocketitems">
              {reservedRockets.map((rockets) => (
                <tr key={rockets.id}>
                  <td>{rockets.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
