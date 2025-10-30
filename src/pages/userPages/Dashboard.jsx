import React from 'react';
import Hero from '../../component/carousel/Hero';
import { Home,Home2, Home3, Home4Left, Home4Right, Home5, Home6 } from '../../component/carousel/Home';
import { slides,grid } from '../../component/data';
import PizzaCategoryCard from '../../component/shared/PizzaCategoryCard ';
import Testomonial from '../../component/shared/Testomonial';
import About from './About';
import Grid from '../../component/shared/grid';
import PizzaDownloadPage from './PizzaDownloadPage';

const Dashboard = () => {
  return (
    <div className="bg-white ">
      <Hero />
        < PizzaCategoryCard />
      <About/>
      <Testomonial/>
      <Grid data={grid} title={"Our Delicious Pizzas"} />;
      <Grid data={grid} title={"Our Delicious Pizzas"} />;
      <PizzaDownloadPage/>
    </div>
  );
};

export default Dashboard;
