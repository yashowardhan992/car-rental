import React from "react";
import { BsPeople } from "react-icons/bs";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { PiSteeringWheel } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      href={product.href}
      className="group rounded-lg bg-sky-50 drop-shadow-lg"
    >
      <div className="m-2">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex flex-row justify-between m-4 text-black">
          <h3 className="text-xl ">{product.title}</h3>
          <h3 className="text-sm border border-blue-400 border-dashed rounded-full px-2 py-1">
            {product.start_production}
          </h3>
        </div>
        <div className="flex flex-col m-4 justify-between text-sm text-gray-800">
          <div className="flex flex-row justify-between">
            <h3 className="flex flex-row gap-2 my-1">
              <span className="my-1 text-blue-400 ">
                <BsPeople />
              </span>
              {product.capacity}
            </h3>
            <h3 className="flex flex-row gap-2 my-1">
              <span className="my-1 text-blue-400">
                <LuFuel />
              </span>

              {product.fuel_type}
            </h3>
          </div>
          <div className="flex flex-row  justify-between">
            <h3 className="flex flex-row gap-2 my-1">
              <span className="my-1 text-blue-400">
                <SlSpeedometer />
              </span>
              {product.mileage}
            </h3>
            <h3 className="flex flex-row gap-2 my-1">
              <span className="my-1 text-blue-400">
                <PiSteeringWheel />
              </span>
              {product.type}
            </h3>
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-between m-2">
          <p className="my-2 text-lg font-medium text-gray-900">
            {product.rent}
            <span className="text-xs ml-1">/ month</span>
          </p>
          <div className="flex flex-row gap-x-4 mt-1">
            <span className="my-1">
              <AiOutlineHeart
                size={24}
                className="bg-blue-100 rounded-md text-blue-400 p-1 my-1"
              />
            </span>
            <button className="bg-blue-400 rounded-xl text-white p-2">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
