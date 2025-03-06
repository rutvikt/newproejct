import React from 'react';
import './Home.scss'; // Import SCSS for styling
import Slider from '../../Componants/Slider/Slider';
import Banner2 from '../../Componants/Banner2/Banner2';
import About from '../../Componants/About/About';
import Increment from '../../Componants/Increment/Increment';
import Banner from '../../Componants/Banner/Banner';
import Lecturetopics from '../../Componants/Lecture/Lecturetopics';
import Slider2 from '../../Componants/Slider2/Slider2';
import Slider3 from '../../Componants/Slider3/Slider3';
import Partners from '../../Componants/Partners/Partners';
import Hireme from '../../Componants/Hireme/Hireme';
import Newsletter from '../../Componants/Newsletter/Newsletter';
import Footer from '../../Componants/Footer/Footer';

const Home = () => {
  return (
    <>
    <Banner id = "home"/>
    <Slider/>
    <Banner2/>
    <About id= "about"/>
    <Increment/>
    <Lecturetopics id = "blog"/>
    <Slider2/>
    <Slider3/>
    <Partners/>
    <Hireme  id = "contact"/>
    <Newsletter/>
    <Footer/>
    </>
  );
};

export default Home;