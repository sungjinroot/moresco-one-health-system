import NavBar from './components/NavBar/NavBar.jsx';
import PatientGrid from './components/PatientsGrid/PatientGrid.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar/>
      <PatientGrid/>
      <Footer/>
    </>
  )
}

export default App;
