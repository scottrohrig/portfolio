import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className='ftr-sticky'>
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted ">
        <section className="d-flex w-75 mx-auto justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Connect with me on social networks:</span>
          </div>

          <div>
            {/* <a href="" className="me-4 text-reset">
            <i className="fab fa-youtube"></i>
          </a> */}
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            {/* <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a> */}
            {/* <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a> */}
            <a
              href="https://www.linkedin.com/in/scott-rohrig/"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/scottrohrig" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-leaf me-3"></i>Scott Rohrig
                </h6>
                <p>
                  "Real courage is when you know you're licked before you begin
                  but you begin anyway and see it through no matter what."
                </p>
                <p className="text-end">- Harper Lee</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Technology</h6>
                <p>
                  <a href="#!" className="text-reset">
                    MERN
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Python
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Godot
                  </a>
                </p>
              </div>

              {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div> */}

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Oakland, CA 94606, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  scott.rohrig@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 714 712 0021
                </p>
                {/* <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p> */}
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={ { backgroundColor: "rgba(0, 0, 0, 0.05)" } }
        >
          © 2021 Copyright { ' ' }
          <a className="text-reset fw-bold" href="https://github.com/scottrohrig">
            @scottrohrig
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
