import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar title="Navbar" />
      <div className="container">
        <User name="Mustafa" salary="15000" department="Bilişim" />
      </div>
    </div>
  );
}

export default App;
