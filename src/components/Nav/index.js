// https://www.w3.org/TR/SVG2/
// https://www.blobmaker.app/
import React, { useState } from 'react';
import {
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav
} from 'mdb-react-ui-kit';

function Nav( props ) {

  const {
    navLinks = [],
    activeTab,
    setActiveTab,
  } = props;

  const [ showNavToggler, setShowNavToggler ] = useState( false );

  return (
    <>
      <MDBNavbarToggler
        type='button'
        data-target='#navbarToggler'
        aria-controls='#navbarToggler'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={ () => { setShowNavToggler( !showNavToggler ); } }
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse navbar show={ showNavToggler }>
        <MDBNavbarNav className="justify-content-lg-end text-end mr-auto mb-2 mb-lg-0">
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href='#' onClick={ () => { setActiveTab( 'about' ); } }>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          { navLinks.map( ( navLink ) => {
            const NavLink = ( navLink.name === 'contact' )
              ? <MDBBtn href={ '#' + navLink.name } size='sm'>{ navLink.name }</MDBBtn>
              : <MDBNavbarLink
                href={ "#" + navLink.name }
                className={ `text-capitalize ${ activeTab === navLink.name && "active"
                  }` }
                onClick={ () => {
                  setActiveTab( navLink.name );
                  setShowNavToggler( false );
                  // setProjectsSelected(navLink.name === "portfolio");
                } }
              >
                { navLink.name }
              </MDBNavbarLink>;

            return (
              <MDBNavbarItem key={ navLink.name }
                onClick={ () => {
                  setActiveTab( navLink.name );
                  setShowNavToggler( false );
                } }
              >
                { NavLink }
              </MDBNavbarItem>
            );
          } ) }

        </MDBNavbarNav>
      </MDBCollapse>
    </>

  );
}

export default Nav;
