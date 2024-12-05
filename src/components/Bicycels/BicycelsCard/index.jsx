import React, { useEffect, useState } from "react";
import francia from "../../../assets/img/francia.svg";
import italia from "../../../assets/img/italia.svg";
import shwed from "../../../assets/img/canada.svg";
import america from "../../../assets/img/america.svg";
import ispania from "../../../assets/img/ispania.svg";
import cl from "../../../assets/img/click.svg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { NavLink } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import axios from "axios";


const BicycelsCard = ({ el }) => {
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
 
 
  const SubmitForTelegram = () => {
    if( userName.trim()===""||userPhone.trim()==="") {
    } else {
      let my_id = `-1002433061265`;
      let token = `7096908386:AAGR-AoOanGnQquLwoJgULy101MaB9ymL7E`;
      let api_Key = `https://api.telegram.org/bot${token}/sendMessage`;
      let newProduct = {
        chat_id: my_id,
        parse_model: "html",
        text: `USER_NAME:${userName},
                 USER_PHONE:${userPhone}
          `,
      };

      axios.post(api_Key, newProduct);
      setUserName("");
      setUserPhone("");
    
    }
 
  };

  const [window, setWindow] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-[50px]">
        <div className="card flex w-[350px] h-[500px] rounded-[10px]  bg-[#FFFF] flex-col  justify-center  relative mt-[100px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
          <h1 className="w-[72px] h-[38px] rounded-b-sm absolute top-2 left-2">
            <img
              src={
                el?.strana === "швейцария"
                  ? shwed
                  : el?.strana === "америка"
                  ? america
                  : el?.strana === "испания"
                  ? ispania
                  : el?.strana === "франция"
                  ? francia
                  : el?.strana === "италия"
                  ? italia
                  : null
              }
              alt="img"
              className="mx-auto flex items-start justify-center "
            />
          </h1>

          <div className="flex items-start flex-col justify-start ml-[50px] text-gray-400 gap-3">
            <Zoom>
              <img
                className="w-[255px]  gap-[30px] object-cover mx-auto flex justify-center mt-[40px]"
                src={el?.url}
                alt="img"
              />
            </Zoom>
            <NavLink to={`/details/${el?._id}`}>
              <h1 className="mt-[25px] hover:text-blue-700 hover:border-b-[2px] flex items-end justify-center hover:border-b-blue-700 w-[349] h-[58px] mr-[25px]">
                {el?.name}
              </h1>
            </NavLink>
            <h3 className="text-[20px] font-[100] flex  ">${el?.price}</h3>
            <button
              onClick={() => setWindow(true)}
              className="text-white w-[274px] h-[57px] bg-[#F57520] flex items-center justify-center rounded-[10px] text-center opacity-0   hover:opacity-[1] mt-[20px]"
            >
              <img src={cl} alt="img" />В 1 клик
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: window ? "flex" : "none",
        }}
        className="w-full absolute h-[400%] bg-[#0000007a] z-[91] top-0 right-0 left-0 bottom-0"
      ></div>
      <center className="absolute flex items-center justify-center">
        <div className="flex items-center justify-center mx-auto">
          <div
            style={{
              display: window ? "flex" : "none",
            }}
            className="w-[921px] h-[525px] rounded-[10px] bg-[#ffff] z-[92] flex items-center justify-around relative shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
          >
            <a
              onClick={() => setWindow(false)}
              className="text-[40px] right-1 cursor-pointer absolute top-1 text-[#B3B3B3] "
            >
              <RiCloseLargeFill />
            </a>
            <h1 className="text-[40px] tracking-[2%] font-[400] font-sans uppercase absolute top-[10px] left-[25px]">
              Заказ в один клик
            </h1>
            <div className="flex flex-col items-start w-[340px] text-center gap-2">
              <img
                className="w-[360px]  object-cover left-[35px]  rounded-[10px] mt-[35px]"
                src={el?.url}
                alt="img"
              />
              <h1 className="text-[#101010] tracking-[1%] leading-[28.8px] font-[500] text-[18px] uppercase mt-[30px]">
                {el?.name}
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-[24px]">
             
              <p className="font-[300] text-[18px] leading-[28.8px] tracking-[1%] text-[#4C4C4C]">
                Укажите ваше имя и телефон, и наш менеджер <br /> свяжется с
                вами для оформления заказа.
              </p>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="bg-[#F8F8F8] rounded-[10px] outline-none p-[16px] w-[427px]"
                type="text"
                placeholder="Имя"
              />{" "}
              <input
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="bg-[#F8F8F8] rounded-[10px] outline-none p-[16px] w-[427px]"
                type="text"
                placeholder="Телефон"
              />
              <p className="font-[400] text-[12px] leading-[19.2px] text-[#777777]">
                Нажимая на кнопку «Заказать» я даю своё согласие на обработку{" "}
                <br />
                персональных данных и принимаю{" "}
                <span className="text-[#F57520]">условия соглашения</span>
              </p>
              <button
                onClick={() => SubmitForTelegram()}
                className="bg-[#F57520] py-[16px] px-[80px] flex items-center justify-center rounded-[10px] w-[427px] text-[#FFFFFF]"
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default BicycelsCard;
