import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import logo from '../../assets/images/blobs/4.svg';

function About( {setActiveTab} ) {



  return (
    <div className="container-fluid hero">
      <div className="row justify-content-center">

        <div className='col col-md-5 order-2 order-md-1  d-flex flex-column align-self-center  text-md-start mx-5 text-reset'>
          <h2 className='text-capitalize fw-bolder poppins'>scott rohrig</h2>
          <p>
            Hi! I'm Scott Rohrig, a full stack software engineering graduate from UC Berkeley coding bootcamp.

            Enthusiastically pursuing

            Committed to a

            Proficient in mobile and desktop development environments.

            Adept at JavaScript, Python and other programming languages to produce clean code.

            Versatile back-end knowledge, able to work across multiple types of database management systems.

            Well-organized and collaborative team player with strong communication and analytical abilities.

            Complex problem-solver with analytical and driven mindset.

            Self-motivator gifted at finding reliable solutions for software issues.
          </p>
          <MDBBtn onClick={ () => {
            setActiveTab( 'resume' );
          } } className="fw-bold fs-6">
            Resume
          </MDBBtn>

        </div>
        <div className=" order-md-2
          col-12 d-none d-sm-flex col-md-5 hero-img mb-5 mb-md-0
          ">
          <img src={ logo } className='blob w-75 w-md-100' alt="" />
          <img
            src={ require( '../../assets/images/portraits/profile_picture_t.png' ) }
            alt="scott rohrig"
            className='pfp w-50 w-md-100'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
