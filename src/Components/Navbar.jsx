import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        
        <h2>Ignacio Alvarez <span>Revestimientos</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="../app.js">Home</a>
          <a onClick={handleClick} href="../Trabajos.js">Trabajos</a>
          <a onClick={handleClick} href="../Contacto.js">Contacto</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`

  h2{
    color: white;
    font-size: 25px;
    font-weight: 600;
    span{
      font-weight: bold;
      z-index: 100;
    }
  }

  padding: .4rem;
  background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(7,8,31,1) 24%, rgba(42,45,180,1) 81%, rgba(0,238,232,1) 100%);
   display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  
  
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    z-index: 100;
  }


  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 100;
   
    a{
      color: white;
      font-size: 3rem;
      display: block;
      z-index: 100;
    }

    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
      z-index: 100;
    }

    
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 100;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
      z-index: 100;
    }


  }
  .burguer{
    @media(min-width: 768px){
      display: none;
      z-index: 100;
    }
  }
`

const BgDiv = styled.div`
  
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(7,8,31,1) 24%, rgba(42,45,180,1) 81%, rgba(0,238,232,1) 100%);
display: flex;

  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 5;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`