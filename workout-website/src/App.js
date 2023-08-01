import logo from './images/3882-zyzz.png';
import './App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Work Out Champ</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/login"><Button variant="contained" > Login </Button></Link>
      </header>
    </div>
  );
}

export default App;
