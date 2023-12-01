import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import StudentAPI from './Components/StudentFilter/StudentAPI';
import Domain from './Components/DomainCRU/Domain';
import DomainModify from './Components/DomainCRU/DomainModify';
import AddDomain from './Components/DomainCRU/AddDomain';
import { useState } from 'react';
import Login from './Components/Login/Login';
function App() {
  const [user, setUser] = useState(false);
  return (
    <div id="app">
      <Router>
        <Navbar />
        {user === false && <Login setUser={setUser} />}
        {user && <><h1>WELCOME TO ACADEMIA PORTAL</h1>
        <Home/>
        <Routes>
        <Route path="/students" element={<StudentAPI/>} />
        <Route path="/domains" element={<Domain/>} />
        <Route path="/domain-modify/:domainId" element={<DomainModify />} />
        <Route path="/add/domain/" element={<AddDomain />} />
        </Routes></>}
      </Router>
      </div>
  );
}

export default App;
