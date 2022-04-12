import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { validateEmail } from '../../utils/helpers';
import logo from '../../assets/images/blobs/4.svg';

function Contact() {

  const [ formState, setFormState ] = useState( { name: '', email: '', message: '' } );

  const [ errorMessage, setErrorMessage ] = useState( '' );
  const { name, email, message } = formState;

  function handleChange( e ) {
    if ( e.target.name === 'email' ) {
      const isValid = validateEmail( e.target.value );
      if ( !isValid ) {
        setErrorMessage( 'Email address is invalid.' );
      } else {
        setErrorMessage( '' );
      }
    } else {
      if ( !e.target.value.length ) {
        setErrorMessage( `${ e.target.name } is required.` );
      } else {
        setErrorMessage( '' );
      }
    }

    if ( !errorMessage ) {
      setFormState( { ...formState, [ e.target.name ]: e.target.value } );
      console.log( 'Handle Form' );
    }
  }

  function handleSubmit( e ) {
    e.preventDefault();
    if ( !errorMessage ) {
      console.log( 'Submit Form', formState );
    }

  }

  return (
    <div className="container-fluid hero">
      <div className="mx-auto resume my-5 py-5 px-3 bg-main rounded-md">
        <div className='mx-auto text-white poppins'>
          <h2 className='text-capitalize fw-bolder'>Contact Me</h2>
          <p>I'd love to hear from you!</p>
        </div>
        <form id='contact-form' onSubmit={ handleSubmit } >
          <input
            className='form-control border-0 mb-2'
            type='text'
            name='name'
            placeholder='Name:'
            aria-label=''
            defaultValue={ '' }
            onBlur={ handleChange }
          />
          <input
            className='form-control border-0 mb-2'
            type='email'
            name='email'
            placeholder='Email:'
            defaultValue={ '' }
            onBlur={ handleChange }
          />
          <textarea
            className='form-control border-0 mb-2'
            type='email'
            name='message'
            placeholder='Message:'
            rows='5'
            defaultValue={ '' }
            onBlur={ handleChange }
          />
          <div>
            { errorMessage && (
              <div>
                <p className='text-white text-capitalize'>{ errorMessage }</p>
              </div>
            ) }
          </div>
          <MDBBtn className='bg-white text-reset fw-bolder'>Submit</MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default Contact;
