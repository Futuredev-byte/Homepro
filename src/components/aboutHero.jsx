import React from 'react';
import img1 from "../assets/Image/About Us.png";
import img2 from "../assets/Icons/Ellipse 5.png"; // Replace with your logo path

const Jumbotron = ({
  title = "About Homepro",
  subtitle = [
    { text: '5,000+ homes sold' },
    { text: '800 billion naira in sales' },
    { text: '4,500+ satisfied customers' },
  ],
}) => {
  return (
    <div
      className="w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center lg:text-start text-center ">
        <div className="text-center w-full md:max-w-[60%] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h1>
          <p className="text-base text-white  pt-4 md:mt-0 lg:flex flex-wrap justify-center gap-8 hidden md:block">
            {subtitle.map((item, index) => (
              <span key={index} className="flex items-center mb-4">
                {(item.text === '5,000+ homes sold' || 
                item.text === '800 billion naira in sales' || 
                item.text === '4,500+ satisfied customers') && (
                  <img src={img2} alt="Logo" className="w-4 h-4 mr-3" />
                )}
                {item.text}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
