import React from 'react';
import Nav from '../Nav';
import logo from '../../assets/images/blobs/4.svg';

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBRipple,
} from 'mdb-react-ui-kit';

function Header( props ) {
  const {
    navLinks = [],
    setActiveTab,
    activeTab,
  } = props;

  return (
    <header className='position-relative'>
      <MDBNavbar expand="lg" light className="fixed-top shadow-none bg-trans">
        <MDBContainer fluid className='mx-3'>
          <MDBNavbarBrand href='#' onClick={ () => { setActiveTab( 'about' ); } }>
            <MDBRipple rippleTag='div' className='rounded-pill bg-image logo'>
              <img src={ logo } alt="" className='logo-blob' />
              <h1 className='poppins c-primary fw-thick text-uppercase'>sr</h1>
            </MDBRipple>
          </MDBNavbarBrand>
          <Nav
            navLinks={ navLinks }
            setActiveTab={ setActiveTab }
            activeTab={ activeTab }
          ></Nav>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default Header;
