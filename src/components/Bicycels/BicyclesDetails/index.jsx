import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaOdnoklassniki } from "react-icons/fa6";
import { IoLogoVk } from "react-icons/io5";
import { PiTelegramLogoThin } from "react-icons/pi";
import { FaViber } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import francia from "../../../assets/img/francia.svg";
import italia from "../../../assets/img/italia.svg";
import shwed from "../../../assets/img/canada.svg";
import america from "../../../assets/img/america.svg";
import ispania from "../../../assets/img/ispania.svg";
import Bicycels from "..";
import BicycelsCard from "../BicycelsCard";
import { GetBicyles } from "../../../redux/reducers/SliceCreate";
import {
  addToFavorite,
  delFavorite,
} from "../../../redux/reducers/AddToFavoriteSlice";
import { AddBasket, Incriment } from "../../../redux/reducers/BasketCliceAdd";
import { MdOutlineStar } from "react-icons/md";

const BicyclesDetails = () => {
  const [Size, setSIze] = useState("");
  const [sizeS, setSIzeS] = useState(false);
  const [sizeL, setSIzeL] = useState(false);
  const [sizeML, setSIzeML] = useState(false);
  const [sizeM, setSIzeM] = useState(false);
  const [sizeXL, setSIzeXL] = useState(false);
  const { favorite } = useSelector((s) => s.fav);
  const { basket } = useSelector((s) => s.basket);
  const dispatch = useDispatch();
  const { bicycles } = useSelector((s) => s.main);
  const [color, setColor] = useState("bg-[transparent]");
  const [Detalis, setDetails] = useState({});
  console.log(Size);
  const { id } = useParams();
  const ToFav = favorite.some((el) => el._id === Detalis._id);
  const Bas = basket.some((el) => el?._id === Detalis._id);

  const navigate = useNavigate();
  const AddToBasket = () => {
    if (Bas) {
      dispatch(basket.filter((el) => el._id !== Detalis._id));
      navigate("/basket");
    } else {
      let colorSize = {
        color: color,
        s:sizeS,
        l:sizeL,
        ml:sizeML,
        m:sizeM,
        xl:sizeXL
    
    
      };
      dispatch(AddBasket({...Detalis,colorSize}));
    }
  };
  async function AddtoBic() {
    let res = await axios.get(
      `https://api.elchocrud.pro/api/v1/c6babcd9cc1c8f617aa8669488549f1c/bike`
    );
    const { data } = res;
    dispatch(GetBicyles(data));
  }
  async function GetDetails() {
    let res = await axios.get(
      `https://api.elchocrud.pro/api/v1/c6babcd9cc1c8f617aa8669488549f1c/bike/${id}`
    );
    const { data } = res;
    setDetails(data);
  }

  function AddFav() {
    if (ToFav) {
      dispatch(delFavorite(Detalis._id));
    } else {
   
      dispatch(addToFavorite(Detalis, ));
    }
  }

  useEffect(() => {
    AddtoBic();
    GetDetails();
  }, []);
  return (
    <>
      <div className="mt-[100px]">
        <div className="container">
          <div className="flex items-start justify-between mt-[150px]">
            <div className="w-[45%] mt-[50px] relative">
              <div
                className={`w-[60px] h-[60px] ${color} absolute z-10 top-[-60px] right-0 rounded-[10px]`}
              ></div>
              <InnerImageZoom
                className="object-cover w-full"
                src={Detalis?.url}
              />
            </div>
            <div className="w-[50%] flex flex-col gap-[12px]">
              <h1 className="text-[40px] tracking-[5%] leading-[49px] font-[400] mb-[30px]">
                {Detalis.name}
              </h1>
              <p className="text-[14px] leading-[22px] text-[#B3B3B3]  font-[400]">
                Scott
              </p>
              <p className="flex items-center gap-[7px]">
                <h1 className="text-[14px] leading-[22px] font-[400] text-[#B3B3B3]">
                  Артикул : 7655-188
                </h1>

                <a className="w-[32px] h-[31px] rounded-[50%] bg-[gray] text-white flex items-center justify-center ml-[120px] cursor-pointer">
                  <FaOdnoklassniki />
                </a>
                <a className="w-[32px] h-[31px] rounded-[50%] bg-[gray] text-white flex items-center justify-center cursor-pointer">
                  <IoLogoVk />
                </a>
                <a className="w-[32px] h-[31px] rounded-[50%] bg-gray-100 text-white flex items-center justify-center">
                  <PiTelegramLogoThin />
                </a>
                <a className="w-[32px] h-[31px] rounded-[50%] bg-gray-100 text-white flex items-center justify-center">
                  <RiWhatsappFill />
                </a>
                <a className="w-[32px] h-[31px] rounded-[50%] bg-gray-100 text-white flex items-center justify-center">
                  <FaViber />
                </a>
              </p>
              <p className="text-[#4D932C] text-[16px] font-[400] mb-[40px]">
                В наличии
              </p>
              <h2 className="font-[500] text-black text-[40px] tracking-[1%] leading-[64px] mb-[30px]">
                ${Detalis.price}
              </h2>
              <p className=" tracking-normal font-[400]  text-[#4C4C4C] leading-[25.6px] text-[16px] mb-[25px]">
                {Detalis.description}
              </p>
              <div className="flex gap-4 flex-col">
                <h1 className="text-[18px] leading-[28px] tracking-[1%] font-[500] ">
                  {" "}
                  Pазмер :{" "}
                </h1>
                <div className="flex gap-6">
                  {" "}
                  <div
                    style={{
                      background: sizeS ? "black" : "white",
                      color: sizeS ? "white" : "black",
                    }}
                    
                    onClick={(e) => {
                      setColor(e.target.value);
                      setSIzeS(true);
                      setSIzeML(false);
                      setSIzeM(false);
                      setSIzeL(false);
                      setSIzeXL(false);
                    }}
                    className="w-[55px] h-[50px] rounded-[7px] border-solid border-[1px] border-gray-200 flex items-center justify-center cursor-pointer hover:text-white hover:bg-black font-[400] text-[20px]"
                  >
                    S
                  </div>
                  <div
                    style={{
                      background: sizeML ? "black" : "white",
                      color: sizeML ? "white" : "black",
                    }}
                    onClick={() => {
                      setSIzeS(false);

                      setSIzeML(true);
                      setSIzeM(false);
                      setSIzeL(false);
                      setSIzeXL(false);
                    }}
                    className="w-[55px] h-[50px] rounded-[7px] border-solid border-[1px] border-gray-200 flex items-center justify-center cursor-pointer hover:text-white hover:bg-black font-[400] text-[20px]"
                  >
                    M-L
                  </div>{" "}
                  <div
                    style={{
                      background: sizeM ? "black" : "white",
                      color: sizeM ? "white" : "black",
                    }}
                    onClick={() => {
                      setSIzeS(false);
                      setSIzeML(false);
                      setSIzeM(true);
                      setSIzeL(false);
                      setSIzeXL(false);
                    }}
                    className="w-[55px] h-[50px] rounded-[7px] border-solid border-[1px] border-gray-200 flex items-center justify-center cursor-pointer hover:text-white hover:bg-black font-[400] text-[20px]"
                  >
                    M
                  </div>{" "}
                  <div
                    style={{
                      background: sizeL ? "black" : "white",
                      color: sizeL ? "white" : "black",
                    }}
                    onClick={() => {
                      setSIzeS(false);
                      setSIzeML(false);
                      setSIzeM(false);
                      setSIzeL(true);
                      setSIzeXL(false);
                    }}
                    className="w-[55px] h-[50px] rounded-[7px] border-solid border-[1px] border-gray-200 flex items-center justify-center cursor-pointer hover:text-white hover:bg-black font-[400] text-[20px]"
                  >
                    L
                  </div>
                  <div
                    style={{
                      background: sizeXL ? "black" : "white",
                      color: sizeXL ? "white" : "black",
                    }}
                    onClick={() => {
                      setSIzeS(false);
                      setSIzeML(false);
                      setSIzeM(false);
                      setSIzeL(false);
                      setSIzeXL(true);
                    }}
                    className="w-[55px] h-[50px] rounded-[7px] border-solid border-[1px] border-gray-200 flex items-center justify-center cursor-pointer hover:text-white hover:bg-black font-[400] text-[20px]"
                  >
                    XL
                  </div>
                </div>
                <div className="flex flex-col mt-[30px] gap-[30px]">
                  Цвет :
                  <div className="flex items-center gap-2">
                    <span
                      onClick={() => setColor("bg-yellow-200 ")}
                      className={` ${
                        Detalis.size <= 0 ? ` opacity-[0.2]` : ` opacity-[1]`
                      } w-[40px] h-[40px] bg-yellow-200 rounded-[50%] cursor-pointer border-[5px] border-solid border-[#E5E5E5]`}
                    ></span>
                    <span
                      onClick={() => setColor("bg-[#0D7F19]")}
                      className={`  ${
                        Detalis.size <= 1 ? ` opacity-[0.2]` : ` opacity-[1]`
                      }  w-[40px] h-[40px] bg-[#0D7F19] rounded-[50%] cursor-pointer`}
                    ></span>
                    <span
                      onClick={() => setColor(" bg-[#FFD536]")}
                      className={` ${
                        Detalis.size <= 2 ? ` opacity-[0.2]` : ` opacity-[1]`
                      }   w-[40px] h-[40px] bg-[#FFD536] rounded-[50%] cursor-pointer`}
                    ></span>
                    <span
                      onClick={() => setColor(" bg-[#FE7E56]")}
                      className={` ${
                        Detalis.size <= 3 ? ` opacity-[0.2]` : ` opacity-[1]`
                      }   w-[40px] h-[40px] bg-[#FE7E56] rounded-[50%] cursor-pointer`}
                    ></span>
                    <span
                      onClick={() => setColor(" bg-[#AC632C]")}
                      className={` ${
                        Detalis.size <= 4 ? ` opacity-[0.2]` : ` opacity-[1]`
                      }  w-[40px] h-[40px] bg-[#AC632C] rounded-[50%] cursor-pointer`}
                    ></span>
                    <span
                      onClick={() => setColor("bg-[#FD0012]")}
                      className={`  ${
                        Detalis.size <= 4 ? ` opacity-[0.2]` : ` opacity-[1]`
                      }  w-[40px] h-[40px] bg-[#FD0012] rounded-[50%] cursor-pointer`}
                    ></span>
                  </div>
                  <div className="flex items-center gap-1 mt-[60px]">
                    <div className="flex items-center  border-solid rounded-[10px] w-[123px] h-[52px] border-[2px]  justify-between">
                      <button className="text-[30px] ml-[10px] font-[200]">
                        -
                      </button>
                      <h1 className="font-[200]">{Detalis.quantity}</h1>
                      <button className="mr-[10px] text-[30px] font-[200]">
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-[30px] ">
                      <button
                        className="bg-[#F57520] text-white w-[180px] h-[52px] rounded-[10px] flex items-center justify-center ml-[12px]"
                        onClick={() => {
                          AddToBasket();
                        }}
                      >
                      {Bas?'В корзине': " В  корзину"}
                      </button>
                      <a
                      
                        onClick={() => AddFav()}
                        className={`text-[40px] cursor-pointer  ${ToFav?"text-[#F57520]":"text-[black]"} w-[50px] h-[50px] bg-[#F8F8F8] flex items-center justify-center rounded-md`}
                      >
                        <CiHeart />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[40px] mt-[170px] font-mono  font-[100] uppercase tracking-[5%] ">
            Описание
          </h1>
          <div className="">
            <p className="text-[15px] font-[100] text-start mt-[60px] mb-[300px] text-black tracking-normal ">
              {Detalis.description}
            </p>
          </div>
          <div className=" flex flex-col ">
            <h1 className="font-[600] text-[50px] tracking-[5%] leading-[49.2px] mb-[100px]">
              Характеристика
            </h1>
            <h4 className="w-[100%] h-[100px]  bg-[#F8F8F8] flex items-center justify-between pl-6 ">
              <h1> Цвет</h1>
              <span
                onClick={() => setColor(color)}
                className={`w-[40px] h-[40px] ${color} rounded-[50%] cursor-pointer mr-[10px]`}
              ></span>
            </h4>
            <h5 className="w-[100%] h-[100px]  flex items-center justify-between pl-6 ">
              <h5> Рейтинг</h5>
              <a className="flex items-center mr-[10px]">
                <MdOutlineStar
                  style={{
                    color: Detalis?.rating >= 1 ? "yellow" : "black",
                  }}
                />
                <MdOutlineStar
                  style={{
                    color: Detalis?.rating >= 2 ? "yellow" : "black",
                  }}
                />
                <MdOutlineStar
                  style={{
                    color: Detalis.rating >= 3 ? "yellow" : "black",
                  }}
                />
                <MdOutlineStar
                  style={{
                    color: Detalis.rating >= 4 ? "yellow" : "black",
                  }}
                />
                <MdOutlineStar
                  style={{
                    color: Detalis.rating === 5 ? "yellow" : "black",
                  }}
                />
              </a>
            </h5>
            <h5 className="w-[100%] h-[100px] bg-[#F8F8F8] flex items-center justify-between pl-6 ">
              <h5> Материал рамы</h5>
              <h1 className="mr-[10px] text-black">{Detalis.material}</h1>
            </h5>
            <p className="w-[100%] h-[100px] flex items-center justify-between pl-6 ">
              <h1> Размер</h1>
              <h1 className="mr-[10px] text-black">{Detalis.size}</h1>
            </p>
            <p className="w-[100%] h-[100px] bg-[#F8F8F8] flex items-center justify-between pl-6 ">
              <h1>Страна</h1>
              {
                <img
                  className="mr-[10px]"
                  src={
                    Detalis.strana === "швейцария"
                      ? shwed
                      : Detalis.strana === "америка"
                      ? america
                      : Detalis.strana === "испания"
                      ? ispania
                      : Detalis.strana === "франция"
                      ? francia
                      : Detalis.strana === "италия"
                      ? italia
                      : null
                  }
                  alt="img"
                />
              }
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="tracking-[5%] leading-[49px] text-[#101010] text-[40px] mt-[90px]">
          Похожие товары
        </h1>
        <div className="flex  overflow-x-scroll items-center gap-[100px] w-[90%]">
          {bicycles
            .filter((el) => el.strana === Detalis.strana)
            .map((el) => (
              <BicycelsCard el={el} key={el._id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default BicyclesDetails;
