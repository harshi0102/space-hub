import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, reserveRocket } from '../redux/rocket/rocketSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const { rocket, isLoading } = useSelector((state) => state.rocket);

  useEffect(() => {
    if (isLoading === false) dispatch(getRockets());
  }, [dispatch, isLoading]);

  return (
    <div className="rockets-container">
      {isLoading && rocket.map((rocket) => (
        <div key={rocket.id} className="rocketsection">
          <div className="itemimage">
            <img src={rocket.image} alt={rocket.name} className="rocketimg" />
          </div>
          <div className="paragraph">
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-details">
              {rocket.reserved && <span className="reserved">Reserved</span>}
              {rocket.description}
            </p>
            <button
              type="button"
              className={rocket.reserved ? 'cancelnow' : 'reservenow'}
              onClick={() => dispatch(reserveRocket(rocket.id))}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Rocket;
