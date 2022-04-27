import React, { useState } from 'react';
import {
  MDBCard
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/blobs/1.svg';

function Projects() {

  const [ projects ] = useState( [
    {
      title: "Happy Harvesters",
      gh_url: "https://github.com/scottrohrig/apple-orchard-games",
      deployed_url: "https://happy-harvesters.herokuapp.com/",
      img_src:
        require( "../../assets/images/projects/orchard-shop.png" ),
      description:
        "A happy little orchard where you can race to see who gets the most apples. Sell your apples for money to get the high score, in this single page web application. Install the app locally as a progressive web app and keep harvesting!"
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
    {
      title: "Pass Gen",
      gh_url: "https://github.com/scottrohrig/password-generator/",
      deployed_url: "https://scottrohrig.github.io/password-generator/",
      img_src:
        require( "../../assets/images/projects/pw-gen.png" ),
      description:
        "Privacy and security are paramount in today's digital world. Easily create passwords on the go with this password generator app."
    },
    {
      title: "Weather By City",
      gh_url: "https://github.com/scottrohrig/weather-dashboard",
      deployed_url: "https://scottrohrig.github.io/weather-dashboard/",
      img_src:
        require( "../../assets/images/projects/weather-dashboard.gif" ),
      description:
        "Looking to travel soon? Get up-to-the-hour weather data for today and the forecast for the next 5 days."
    },
    {
      title: "Dragon Ball Mini",
      gh_url: "https://sco-otr.itch.io/dragonball-mini",
      deployed_url: "https://sco-otr.itch.io/dragonball-mini",
      img_src:
        require( "../../assets/images/projects/dragon-ball-mini-preview.gif" ),
      description:
        "A small demo project exploring the Godot game engine. Features include abstract base classes, entity inheritance, vector-based movement, stat management, global singletons, finite state machine, observer pattern, and more!"
    },
    {
      title: "One-Hand Solitaire",
      gh_url: "https://github.com/scottrohrig/one-hand-solitaire",
      deployed_url: "https://github.com/scottrohrig/one-hand-solitaire",
      img_src:
        require( "../../assets/images/projects/solitaire.png" ),
      description:
        "A project created in an afternoon dedicated to exploring the Godot engine's control nodes. Built entirely using control nodes and the editor's built-in theme editor. Clone the repository and add the project to your Godot library to run this application."
    },
  ] );

  return (
    <div className="container-fluid rounded-md p-3">
      <div
        className="row justify-content-center mx-auto gx-1 projects-hero"
      // style={ { backgroundImage: `url(${ logo })` } }
      >

        <div className='  text-reset'>
          <h3 className='fw-bolder poppins'>
            Portfolio
          </h3>
          <p>A collection of recent works</p>
        </div>

      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-2 g-4 ">
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
                  <p className="card-text scroll-cut fs-r text-reset">{ project.description }</p>

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
