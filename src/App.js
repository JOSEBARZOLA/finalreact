import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './Home';

import Contacto from './Contacto'
import Trabajos from './Trabajos'
import NavBarExample from './Components/Navegador/navegador';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBarExample className="contenedorData" />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Contacto' element={<Contacto />} />
            <Route path='Trabajos' element={<Trabajos />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
      </BrowserRouter>
      

    </div>


  );
}


export default App;