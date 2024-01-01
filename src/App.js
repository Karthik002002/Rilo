import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarTop from './components/navbar/Navbar';
import Mpc from './components/Mainpage Contents/Mpc';


function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Mpc />
    </div>
  );
}

export default App;
