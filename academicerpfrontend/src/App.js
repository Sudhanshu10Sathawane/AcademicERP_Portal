import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import StudentAPI from './Components/StudentFilter/StudentAPI';
import Domain from './Components/DomainCRU/Domain';
import DomainModify from './Components/DomainCRU/DomainModify';
function App() {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <h1>WELCOME TO ACADEMIA PORTAL</h1>
        <Home/>
        <Routes>
        <Route path="/students" element={<StudentAPI/>} />
        <Route path="/domains" element={<Domain/>} />
        <Route path="/domain-modify/:domainId" element={<DomainModify />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
