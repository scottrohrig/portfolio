import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import logo from '../../assets/images/blobs/4.svg';

function About() {
  return (
    <div className="container-fluid hero">
      <div className="row">

        <div className='col col-md-5 order-2 order-md-1  d-flex flex-column align-self-center  text-md-start mx-5 text-reset'>
          <h2 className='text-capitalize fw-bolder poppins'>scott rohrig</h2>
          <p>
            Hi! I'm Scott Rohrig, a full stack developer based out of Oakland,
            CA. Nutella vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <MDBBtn href="#" className="fw-bold fs-6">
            download CV
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
