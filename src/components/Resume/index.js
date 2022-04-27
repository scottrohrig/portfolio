import React from 'react';
import resumeImg from '../../assets/images/resume-apr-22-sm.png';
import resume from '../../assets/Resume - Scott Rohrig - Apr 2022.pdf';

function Resume() {
  return (
    <div className="container-fluid hero bg-main rounded-md" style={ { maxWidth: '1080px' } }>
      <div className="resume mx-auto my-5 py-5 ">

        <div className='mx-auto text-reset'>
          <h2 className='d-lg-none text-capitalize fw-bolder text-white poppins'>Resume</h2>
          <div className='h-25 w-fit mx-auto mb-3'>
            <img src={ resumeImg } alt='resume' className='w-75 border-top border-start border-end border-white rounded-3' />
          </div>
          <a
            href={ resume }
            target='_blank'
            rel="noopener noreferrer"
            className='btn bg-light rounded-pill fs-6 fw-bold'>
            Resume
          </a>


        </div>
      </div>
    </div>
  );
};

export default Resume;
