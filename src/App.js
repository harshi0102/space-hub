import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './Routes/rockets';
import Missions from './Routes/missions';
import Myprofile from './Routes/profile';

import { getMissions } from './redux/mission/missionSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="categories" element={<Missions />} />
          <Route path="myprofile" element={<Myprofile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
