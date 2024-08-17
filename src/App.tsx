import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import User from './Components/User';
import NotFound from './Components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
