
import React from 'react';
import About from '../Pages/About/About';
import Contuctus from '../Pages/Contuctus/Contuctus';
import HomeBanner from '../Pages/HomeBanner/HomeBanner';
import Projects from '../Pages/Project/Projects';
import Service from '../Pages/Service/Service';

const Home = () => {

    return (
      <div>
        <div>
          <HomeBanner></HomeBanner>
        </div>
        <div>
          <About></About>
        </div>
        <div>
          <Service></Service>
        </div>
        <div>
          <Projects></Projects>
        </div>
        <div>
          <Contuctus></Contuctus>
        </div>
        
      </div>
    );
};

export default Home;