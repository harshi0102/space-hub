import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rocket/rocketSlice';

function Rockets() {
  const { rocket, isLoading } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchRockets());
    }
  }, [isLoading]);

  return (
    <div>
      {rocket.map((rocket) => <Rockets key={rocket.id} rocketData={rocket} />)}
    </div>

  );
}

export default Rockets;
