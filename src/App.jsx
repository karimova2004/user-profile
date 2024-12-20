// import React from 'react';
// import './App.css';
// import Profile from './components/Profile';

// function App() {
//   return (
//     <div className="App">
//       <h1>User Profile</h1>
//       <Profile />
//     </div>
//   );
// }

// export default App;







// taymer

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/clock">Clock</Link>
          <Link to="/stopwatch">Stopwatch</Link>
          <Link to="/timer">Timer</Link>
        </nav>
        <Routes>
          <Route path="/clock" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
