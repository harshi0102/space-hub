import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/missions';
import Rocket from './components/rocket';
import MyProfile from './components/myProfile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
