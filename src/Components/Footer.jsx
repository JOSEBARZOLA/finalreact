import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <DivContainer>
        <footer className='text-white py-4'>
            <div className='container'>
                <nav className='row'>
    
                    <ul className=' col-12 col-md-6 list-unstyled p-0 '>
                       <li className='font-weight-bold mb-2'>IA<br/><span>REVESTIMIENTOS</span></li>
                       <li className='font-weight-bold mb-2'></li>
                       <li className='text-start'>General Baldissera, Cordoba.</li>
                       <li className='text-start'>Horario de atención: 08:00hs a 18:00hs.</li>
                    </ul>
                    
                    <hr/>
                    <br />
                    <div className='container-text'>
                       <p className='text-center mb-0 mt-0'>Copyright 2022, Jose Barzola - Full stack developer.</p>
                    
                    </div>
            

                </nav>


            </div>
    
   


        </footer>

    </DivContainer>
  )
}

export default Footer


const DivContainer = styled.div`
footer{
    background: rgb(0,2,110);
background: linear-gradient(0deg, rgba(0,2,110,1) 10%, rgba(0,0,0,1) 30%, rgba(7,8,31,1) 69%, rgba(25,124,201,1) 93%, rgba(0,19,110,1) 100%);
}
.container-text{
    height: 35px;
}
.text-center{
    font-size:15px;
}
`