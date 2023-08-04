import logo from './images/3882-zyzz.png';
import './App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import React, {useState} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className="App">
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <header className="App-header">
          <h1>Work Out Champ</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/login"><Button variant="contained" > Login </Button></Link>
        </header>
      </div>
  );
}

export default App;
