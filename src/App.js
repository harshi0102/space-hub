import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Mission from './InnerPages/mission';
import MyProfile from './InnerPages/profile';
import Rocket from './InnerPages/rocketPages';

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/rockets" element={<Rocket />} />
          <Route path="/missions" element={<Mission />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
