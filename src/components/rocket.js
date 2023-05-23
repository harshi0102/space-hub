import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, reserverockets, cancelrockets } from '../redux/rocket/rocketSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRockets());
    }
  }, [status, dispatch]);

  const handleReservation = (rocketId) => {
    dispatch(reserverockets(rocketId));
  };

  const onCancel = (rocketId) => {
    dispatch(cancelrockets(rocketId));
  };

  return (
    <section className="main">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="RocketSection navcontainer">
          <div className="rocketlogoimage">
            <img src={rocket.flickr_images} alt={`Rocket ${rocket.name}`} />
          </div>
          <div className="rocketdescription">
            <h3 className="rockettitle">{rocket.name}</h3>
            <p className="rockettext">
              <span className={rocket.reserved === true ? 'show' : 'hidden'}>Reserved</span>
              {rocket.description}
            </p>
            {rocket.reserved && (
              <button
                type="button"
                className="cancelnow"
                onClick={() => onCancel(rocket.id)}
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                className="reservenow"
                onClick={() => handleReservation(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Rocket;
