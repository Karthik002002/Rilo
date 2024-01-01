import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarTop from './components/navbar/Navbar';
import Mpc from './components/Mainpage Contents/Mpc';
import RiloRoutes from './Routes/Index';


function App() {
  return (
    <div className="App">
      <RiloRoutes />
    </div>
  );
}

export default App;
