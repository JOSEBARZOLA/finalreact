import React from 'react'
import styled from 'styled-components'

function Parrafo() {
  return (
    <DivParrafo>
<div className='DivParrafo'>

<div className='Contenido'>
    <h3 className='Titulo'>IA <span>Revestimientos</span></h3>
    <p className='Parrafo'>Transformamos tu espacio creando la mejor versión de tu hogar.</p>
    <p className='Parrafo'>¡Un servicio incomparable!</p>
    <p className='Parrafo'>Nuestro servicio personalizado nos posiciona como pioneros en el negocio, porque asesoramos a nuestros clientes y compartimos nuestas recomendaciones.</p>
    <p className='Parrafo'>especializados en lo que hacemos, identificamos el problema y calculamos los materiales exactos, para dar el mejor precio con un presupuesto acorde a lo que el cliente solicita.</p>

    </div>
</div>
<div className='DivParrafo'>

<div className='Contenido'>
    <h3 className='Titulo'><span>¿Quienes somos?</span></h3>
    <p className='Parrafo'>IA Revestimientos, es una empresa familiar, en continuo crecimiento.</p>
    <p className='Parrafo'>Ubicados en la localidad de General Baldissera, provincia de Córdoba.</p>
    <p className='Parrafo'>Hacemos trabajo de revestimiento con Durlock y fibrocemento, tambien realizamos fajas para control de humedad.</p>
    <p className='Parrafo'>Y si lo que desea es darle vida a su hogar, le ofrecemos un servicio de pinturería y trabajos de Revear, con las mejores pinturas del mercado.</p>

    </div>
</div>

        </DivParrafo>
  )
}

export default Parrafo


const DivParrafo = styled.div`
.DivParrafo {
    display: flex;
    width: 50%;
    
    border: #00e0f6 solid;
    border-radius: 20px;
    color: aliceblue;
    flex-direction: row;
    background: rgb(0,2,110);
background: linear-gradient(0deg, rgba(0,2,110,1) 10%, rgba(0,0,0,1) 30%, rgba(7,8,31,1) 69%, rgba(25,124,201,1) 93%, rgba(0,19,110,1) 100%);

    justify-content: center;
    align-items:center;
    margin: 50px auto;
    height: 100%;
   
}

.Contenido {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    padding: 40px;
    flex-wrap: nowrap;

}

.Contenido .Titulo {
    margin: 20px auto;

}

.Parrafo{
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    margin-right: 1rem;
    
  }
  

  @media (max-width:450px) {
    .DivParrafo {
       
        width: 300px;
        height: 100% auto;
       
    }

   

  

}
`