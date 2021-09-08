import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Country({ flag, name, population, region, capital }) {
  return (
    <div className="flex flex-col mb-5 bg-mainDarkGrayish h-96 w-64 border-8 border-borderColor rounded-lg">
      <div className="bg-borderColor">
        <LazyLoadImage
          src={flag}
          effect=""
          className="rounded-t-md"
          height={400}
          width={250}
        />
      </div>
      <div className="flex flex-col ml-6">
        <h2 className="mt-5 mb-5 font-extrabold text-xl">{name}</h2>
        <div className="flex ">
          <p className="font-bold">Population: </p>
          {"  "}
          <p className="font-extralight"> {population}</p>
        </div>
        <div className="flex ">
          <p className="font-bold">Region: </p>
          <p className="font-extralight"> {region}</p>
        </div>
        <div className="flex ">
          <p className="font-bold">Capital: </p>
          <p className="font-extralight">{capital}</p>
        </div>
      </div>
    </div>
  );
}

export default Country;
