import React from 'react';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profilecontainer">
      <div>
        <h3>My Missions</h3>
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
