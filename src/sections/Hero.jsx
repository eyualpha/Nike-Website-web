import React from "react";
import Button from "../compoments/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full flex flex-col xl:flex-row  justify-center min-h-screen gap-10 max-container"
    >
      <div className=" relative xl:w-1/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collections</p>
        <h1>
          <span>The New Arival</span>
          <br />
          <span>Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort and inovatoin for your
          active life
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
      </div>
      <div className=" flex justify-starts items-start flex-wrap w-full mt-20 gap-16 padding-x">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
