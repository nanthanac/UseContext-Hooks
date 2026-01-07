import './App.css';
import { useContext } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { ThemeContext } from './context/ThemeContext';
function App() {
  const {theme}=useContext(ThemeContext);
  return (
    <div className={theme}>
      <NavBar></NavBar>
      <Home></Home>
     
    </div>
  );
}

export default App;
