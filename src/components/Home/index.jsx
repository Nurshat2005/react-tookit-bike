import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import men from "../../assets/img/1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BicycelsCard from "../Bicycels/BicycelsCard";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpg";
import slide from "../../assets/img/slide5.jpg";
import icons1 from "../../assets/img/1.svg";
import icons2 from "../../assets/img/2.svg";
import icons3 from "../../assets/img/3.svg";
import icons4 from "../../assets/img/4.svg";
import icons5 from "../../assets/img/5.svg";
import icons6 from "../../assets/img/6.svg";
import icons7 from "../../assets/img/7 1.svg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GetBicyles } from "../../redux/reducers/SliceCreate";
import Rating from "../Rating";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dispatch = useDispatch();
  const { bicycles } = useSelector((s) => s.main);
  async function GetAllBic() {
    let res = await axios.get(
      `https://api.elchocrud.pro/api/v1/c6babcd9cc1c8f617aa8669488549f1c/bike`
    );
    const { data } = res;
    dispatch(GetBicyles(data));
  }
  useEffect(() => {
    GetAllBic();
  }, []);
  return (
    <>
      <div
        className=""
        style={{
          background: ` url(${men})no-repeat center/cover`,
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="  ">
            <div className=" text flex flex-col items-start justify-center">
              <h1 className="text-[110px] tracking-[2%] font-[500] text-white uppercase leading-[135px] font-Bebas Neue Cyrillic mt-[200px]">
                Электро <br /> велосипеды
              </h1>
              <p className="text-[#FFFFFF] font-[100] leading-[28.8px] text-[18px] tracking-[1%] mt-[30px]">
                Cento10 Hybrid — это гоночный велосипед с помогающим <br />
                педалированию электроприводом, который устанавливает новый,
                <br /> очень высокий стандарт для данной категории
              </p>
              <button className="text-white bg-[#F57520] mt-[40px] p-[4px] rounded-[10px] w-[180px] h-[52px]">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mb-[200px] relative">
        <div className=" absolute top-[0] h-[200px] w-[200px] bg-[#ffffff7a] z-19 left-[-100px]"></div>
        <div className=" absolute top-[0] h-[200px] w-[200px] bg-[#ffffff7a] z-19 right-[-100px]"></div>

        <div className="icons  flex justify-between items-center w-[180px] gap-[70px] ">
          <img className="   w-full   " src={icons1} alt="img" />
          <img className="  w-full" src={icons2} alt="img" />
          <img className="  w-full" src={icons3} alt="img" />
          <img className="  w-full" src={icons4} alt="img" />
          <img className=" w-full" src={icons5} alt="img" />
          <img className="  w-full" src={icons6} alt="img" />
          <img className=" w-full" src={icons7} alt="img" />
        </div>
      </div>
      <div className="flex items-start justify-center gap-[150px]  mb-[100px] flex-wrap">
        {bicycles.length
          ? bicycles.map((el) => <BicycelsCard el={el} key={el._id} />)
          : null}
      </div>
      <div className=" container  ">
        <div className="mt-[100px] flex items-center justify-center mx-auto">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Zoom>
                <img src={slide1} alt="img" className="w-[400px]" />{" "}
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <img src={slide2} alt="img" className="w-[400px]" />{" "}
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <img src={slide3} alt="img" className="w-[400px]" />{" "}
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <img src={slide4} alt="img" className="w-[400px]" />{" "}
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <img src={slide} alt="img" className="w-[400px]" />{" "}
              </Zoom>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-[200px]">
        <Rating />
      </div>
    </>
  );
};

export default Home;
