import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import not from "../../assets/img/nou product.png";
import { FaBasketShopping } from "react-icons/fa6";

const Favorite = () => {
  const { favorite } = useSelector((s) => s.fav);
  const date = new Date().toLocaleString("default", { month: "long" });
  const Day = new Date().getDate().toString();
  console.log(favorite);
  return favorite.length > 0 ? (
    <div className="">
      <div className="container">
        <div className="flex items-center  justify-start  flex-wrap gap-[150px]">
          {favorite.map((el) => (
            <div className="mt-[100px] w-[400px] bg-white rounded-[10px] relative h-[450px] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <div className=" flex flex-col justify-start items-center">
                <div className=" w-[380px] object-contain  flex items-center justify-center flex-col mt-[20px] ">
                  <img src={el.url} alt="" />
                </div>
                <p className="mt-[20px] font-[300]">{el.price}$</p>
                <h1 className="mt-[10px]">{el.name}</h1>
                <button className="text-white mt-[20px] flex items-center justify-center w-[150px] h-[40px] bg-[#F57520] rounded-[5px] font-[100] gap-2">
                  <FaBasketShopping />
                  {Day} {date}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <center>
      {" "}
      <img className="text-center flex items-center" src={not} alt="img" />
    </center>
  );
};

export default Favorite;
