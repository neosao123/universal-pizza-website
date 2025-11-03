import React from 'react';
import Hero from '../../component/carousel/Hero';
import { Home, Home2, Home3, Home4Left, Home4Right, Home5, Home6 } from '../../component/carousel/Home';
import { slides, grid } from '../../component/data';
import PizzaCategoryCard from '../../component/shared/PizzaCategoryCard ';
import Testomonial from '../../component/shared/Testomonial';
import About from './About';
import Grid from '../../component/shared/grid';
import PizzaDownloadPage from './PizzaDownloadPage';
import Customization from '../../component/shared/Customization';
import Cart from '../../component/shared/Cart';
import pizzaImg from "../../assets/slider/pizaaimg1.jpg"

const Dashboard = () => {
  const handleSelection = (section, option) => {
    console.log(`Selected ${option} for ${section}`);
  };
  const options = [
    { text: "Thin Crust", amount: 50 },
    { text: "Cheese Burst", amount: 80 },
    { text: "Whole Wheat", amount: 60 },
  ];
  const pizzaData = {
    name: "Margherita Pizza",
    image: pizzaImg,
    description: {
      tab: ["CRUST", "CRUST TYPE", "SPECIAL BASES"],
      description: "Cheese, Tomato Sauce, Basil, Olive Oil",
    },


    tabs: ["DOUGH", "CHEESE", "SPICY", "SAUCE", "COOK", "TOPPINGS"],

    options: [
      { text: "Small", price: 199 ,image: pizzaImg},
      { text: "Medium", price: 299 ,image: pizzaImg },
      { text: "Large", price: 399,image: pizzaImg },
      { text: "Extra Large", price: 499,image: pizzaImg },
    ],
    tabContent: {
      DOUGH: {
        subTabs: {
          CRUST: [
            { text: "Regular", price: 0.00 },
            { text: "Gluten Free", price: 1.50 },
            { text: "Pan ", price: 0.00 },
            { text: "Whole Wheat ", price: 1.00 },
            { text: "Cauliflower", price: 1.50 }
          ]
          ,
          CRUST_TYPE: [
            { text: "Regular", price: 0.00 },
            { text: "Thin", price: 0.00 },
            { text: "Thick", price: 0.00 },
          ]
          , SPECIAL_BASES: [
            { text: "Indian Style ", price: 0.00 },
            { text: "Bbq ", price: 1.0 },
            { text: "Garlic ", price: 1.0 },
            { text: "Pesto ", price: 1.0 },
            { text: "Shahi ", price: 1.0 },
            { text: "Tandoori ", price: 1.0 },
            { text: "Regular ", price: 0.00 },
            { text: "Achaari ", price: 1.0 },
            { text: "Tikka ", price: 1.0 },
            { text: "Schezwan ", price: 1.0 },
            { text: "Jain (base)", price: 0.00 },
            { text: "Alfredo ", price: 1.0 },


          ]
        },

      },
      CHEESE: {
        subTabs: {
          CHEESE: [
            { text: "Regular", price: 0.00 },
            { text: "Feta Cheese", price: 0.50 },
            { text: "Goat Cheese ", price: 1.00 },
            { text: "Vegan Cheese ", price: 1.00 },

          ]
        }
      },
      SPICY: {
        subTabs: {
          SPICY_LEVEL: [
            { text: "Regular", price: 0.00 },
            { text: "Medium", price: 0.00 },
            { text: "Extra ", price: 0.00 },
          ]
        }
      },
      SAUCE: {
        subTabs: {
          SAUCE: [
            { text: "Regular", price: 0.00 },
            { text: "Extra Sauce", price: 0.50 },
            { text: "Easy Sauce", price: 0.50 },
          ]
        }
      },
      COOK: {
        subTabs: {
          COOKING_LEVEL: [
            { text: "Regular", price: 0.00 },
            { text: "Well Done", price: 0.00 },
            { text: "Lightly Done ", price: 0.00 },
          ]
        }
      },
      TOPPINGS:
      {
        subTabs: {
          Premium_Toppings:
            [{ text: "Tandoori Chaap ", price: 1.50 },
            { text: "Malai Chaap ", price: 1.50 },
              { text: "Tandoori Paneer ", price: 1.50 },
              { text: "Malai Paneer ", price: 1.50 },
              { text: "Achari Paneer ", price: 1.50 },
              { text: "Plant Based Pepperoni ", price: 1.50 },
              { text: "Cheese ", price: 0.50 },
              { text: "Bbq Paneer ", price: 1.50 },
              { text: "Makhni Paneer ", price: 1.50 },
              { text: "Chili Paneer ", price: 1.50 },
              { text: "Garlic Paneer ", price: 1.50 },
              { text: "Peri Peri Paneer ", price: 1.50 },
             { text: "Shahi Paneer ", price: 1.50 },
              { text: "Butter Paneer ", price: 1.50 },

                    
            ]
          ,
          Regular: [
           { text: "Plant Based Beef ", price: 1.50 },
            { text: "Plant Based Sausage ", price: 1.50 },
              { text: "Red Onions ", price: 1.50 },
              { text: "Green Pepper ", price: 1.50 },
              { text: "Mushrooms ", price: 1.50 },
              { text: "Pineapple ", price: 1.50 },
              { text: "Black Olives ", price: 0.50 },
              { text: "Hot Pepper ", price: 1.50 },
              { text: "Tomatoes ", price: 1.50 },
              { text: "Sweet Corn ", price: 1.50 },
              { text: "Jalepeno ", price: 1.50 },
              { text: "Brocolli ($ 2.50)", price: 1.50 },
             { text: "Spinach ", price: 1.50 },
            { text: "Green Olives ", price: 1.50 },
              { text: "Sun Dried Tomatoes ", price: 1.50 },
            { text: "Roasted Mushrooms ", price: 1.50 },
              { text: "Zuchinni ", price: 1.50 },
              { text: "Eggplant ", price: 1.50 },
              { text: "Bruschetta  ", price: 1.50 },
              { text: "Artichoke  ", price: 1.50 },
              { text: "Basil ", price: 0.50 },
              { text: "Broccoli  ", price: 1.50 },
              { text: "Cheddar Cheese ", price: 1.50 },
              { text: "Vegan Cheese ", price: 1.50 },
           
          ]
          ,
          Indian_Style: [
            { text: "Coriander ", price: 0.00 },
          { text: "Extra Sauce ", price: 0.50 },
            { text: "Garlic ", price: 0.50 },
            { text: "Green Chilli ", price: 0.50 },
            { text: "Red Chilli ", price: 0.50 },
         
          ]
        }
      }
    }
  };
  return (
    <div className="bg-white ">
      {/* <Hero /> */}
      <Customization onSelect={handleSelection} product={pizzaData} />
      <Cart />
      {/* {/* < PizzaCategoryCard />
      <About/>
      <Testomonial/>
      <Grid data={grid} title={"Our Delicious Pizzas"} />;
      <Grid data={grid} title={"Our Delicious Pizzas"} />;
      <PizzaDownloadPage />*} */}
    </div>
  );
};

export default Dashboard;
