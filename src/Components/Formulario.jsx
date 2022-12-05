import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'





function ContactForm() {
  const [state, handleSubmit] = useForm("mnqreana");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<>
    <DivContainer>
      
        <form className='form' action='https://formspree.io/f/mnqreana' method='POST' onSubmit={handleSubmit}>
        <div class="form__container">
        <h3 className='form__title'><span>Contáctame</span></h3>

      <label className='LabelClass' htmlFor="name">
        Nombre
      </label>
      <input className='form__imput'
        id="name"
        type="text" 
        name="name"/>
      <label className='LabelClass' htmlFor="email">
        Email
      </label>
      <input className='form__imput'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea className='form__input form__input--message'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='form__cta col-10 p-3 m-4' type="submit" disabled={state.submitting}>
        Enviar
      </button>
      </div>
       </form>
    
       
    </DivContainer>
    </>
    
  );
}
function App() {
  return (
    <ContactForm/>
  );
}
export default App;



const DivContainer = styled.div`

.form {
    background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,6,46,1) 30%, rgba(0,10,121,1) 63%, rgba(97,103,204,1) 93%);
    width: 90%;
    margin: 30PX auto;
    max-width: 400px;
    border-radius: 1em;
    padding: 3.5em 1.5em;
    border-color: black;
}

.LabelClass{
    color: white;
}

    .form__container {
        width: 100%;
        display: grid;
        gap: 1em;
        grid-auto-columns: 100%;
    }

    .form__title {
        color: white;
        text-align: center;
        font-size: 1.9rem;
        margin-bottom: .4em;
    
    }

    .form__imput {

        font-family: inherit;
        font-size: 1rem;
        padding: .8em 1em;
        outline: none;
        border: none;
        border: 1px solid #bbb0b0;
        border-radius: 0.2em;
        
    }
    
    .form__input--message {
        resize: none;
        padding: 1.8rem 1em;
        margin-bottom: .5em;
    
    }

    .form__cta {
        font-family: inherit;
        background-color: #0375cd;
        color: #fff;
        border: none;
        font-weight: 300;
        padding: .10em 0;
        border-radius: .2em;
        cursor: pointer;
        font-weight: 400;
        
    }

    @media (max-width:450px) {
        .form {
            padding: 3.5em 1.5em;
        }
    
    }


`