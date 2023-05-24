import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MissionChart from '../components/missionChart';
import { getMissions } from '../redux/mission/missionSlice';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <main>
      <MissionChart />
    </main>
  );
}

export default Missions;
