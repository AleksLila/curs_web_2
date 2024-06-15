import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SingIn';
import AuthDetails from './components/auth/AuthDetails';
import MainPage from './components/MainPage';

const Home = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/mainpage");
  };

  return (
    <div>
      <SignUp />
      <SignIn />
      <AuthDetails />
      
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/my-curs-web" element={<Home />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
