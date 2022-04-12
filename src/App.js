import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [ navLinks ] = useState( [
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'resume' },
    { name: 'contact' }
  ] );
  const [ activeTab, setActiveTab ] = useState( navLinks[ 0 ] );

  const renderContent = () => {

    switch ( activeTab ) {
      case navLinks[ 0 ].name:
        return ( <About setActiveTab={ setActiveTab } /> );
      case navLinks[ 1 ].name:
        return ( <Projects /> );
      case navLinks[ 2 ].name:
        return <Resume />;
      case navLinks[ 3 ].name:
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className='App min-vh-100'>
      <Header
        navLinks={ navLinks }
        setActiveTab={ setActiveTab }
        activeTab={ activeTab }
      />
      <div className='pt-4 mt-md-3 mt-xxl-4'>
        <section className='container-fluid pt-2 mt-5 pt-lg-4 pt-xxl-5'>
          { renderContent() }

        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
