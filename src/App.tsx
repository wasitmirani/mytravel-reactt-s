import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Home: React.FC = () => {
  return <h1>Home</h1>;
};

const About: React.FC = () => {
  return <h1>About</h1>;
};

const NotFound: React.FC = () => {
  return <h1>404 Not Found</h1>;
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
