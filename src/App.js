import './App.css';
import Navbar from './Components/Navbar';
import Carrousell from './Components/Carrousell';
import Formulario from './Components/Formulario';
import Footer from './Components/Footer';
import Parrafo from './Components/Parrafo';
import styled from 'styled-components'




function App() {
  return (
    <>
    <div className='Body'>
    <Navbar/>
    <Carrousell/>
    <Parrafo/>
    <br></br>
    <Formulario/>
    <br></br>
    <Footer/>
    </div>
    </>
    
  );
}

export default App;

const Body = styled.div`

.Body {
  
  color: black;
}
`