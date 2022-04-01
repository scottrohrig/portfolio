import React, { useState } from 'react';
import {
  MDBCard
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/blobs/1.svg';

function Projects() {

  const [ projects ] = useState( [
    {
      title: "tella",
      gh_url: "https://github.com/scottrohrig/messaging-app",
      deployed_url: "https://tella.herokuapp.com/",
      img_src:
        require( "../../assets/images/projects/convo-web.png" ),
      description:
        "A privacy-based messaging app built with a MySQL database using Model View Controller (MVC) paradigm to focus on connecting with those you love."
    },
    {
      title: "got 🍻 hops",
      gh_url: "",
      deployed_url: "https://scottrohrig.github.io/got-hops/",
      img_src:
        require( "../../assets/images/projects/got-hops-demo.gif" ),
      description:
        "The best to find breweries around town! Search and star you favorite breweries. Come back and add more to the list for later. Perfect for planning local nights out or stepping up your travel itinerary while out on holiday."
    },
    {
      title: "Speeducate",
      gh_url: "",
      deployed_url: "https://scottrohrig.github.io/speed-cards/",
      img_src:
        require( "../../assets/images/projects/speed-cards.png" ),
      description:
        "A flashcard app for foundational web development concepts and practices. Compete for the highscore!"
    },
    {
      title: "tella",
      gh_url: "https://github.com/scottrohrig/messaging-app",
      deployed_url: "https://tella.herokuapp.com/",
      img_src:
        require( "../../assets/images/projects/convo-web.png" ),
      description:
        "A privacy-based messaging app built with a MySQL database using Model View Controller (MVC) paradigm to focus on connecting with those you love."
    },
    {
      title: "got 🍻 hops",
      gh_url: "",
      deployed_url: "https://scottrohrig.github.io/got-hops/",
      img_src:
        require( "../../assets/images/projects/got-hops-demo.gif" ),
      description:
        "The best to find breweries around town! Search and star you favorite breweries. Come back and add more to the list for later. Perfect for planning local nights out or stepping up your travel itinerary while out on holiday."
    },
    {
      title: "Speeducate",
      gh_url: "",
      deployed_url: "https://scottrohrig.github.io/speed-cards/",
      img_src:
        require( "../../assets/images/projects/speed-cards.png" ),
      description:
        "A flashcard app for foundational web development concepts and practices. Compete for the highscore!"
    },
  ] );

  return (
    <div className="container-fluid ">
      <div
        className="row justify-content-center  mx-auto gx-1 projects-hero"
        style={ { backgroundImage: `url(${ logo })` } }
      >

        <div className='  text-reset'>
          <h3 className='fw-bolder poppins'>
            Portfolio
          </h3>
          <p>A collection of recent works</p>
        </div>

      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 m-2 g-4">
        { projects.map( ( project, i ) => {

          const projectImg = project.img_src;

          return (
            <div className="col" key={ i }>
              <MDBCard >
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={ projectImg } className="img-fluid cardi-img" alt='' />
                  <a href={ project.deployed_url } target="_blank" rel="noreferrer" >
                    <div
                      className="mask"
                      style={ { backgroundColor: "rgba(0, 0, 0, 0.6)" } }
                    ></div>
                  </a>
                </div>

                <div className="card-body">
                  <h5 className="card-title fw-bolder poppins">
                    { project.title }
                  </h5>
                  <p className="card-text text-reset">{ project.description }</p>

                  <a href={ project.gh_url } className="btn btn-primary">
                    browse the code
                  </a>
                </div>
              </MDBCard>
            </div>
          );
        } ) }
      </div>
    </div>
  );
};

export default Projects;
