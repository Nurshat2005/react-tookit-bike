import React from "react";
import menBic from "../../assets/img/men-bic.png";
import dimond from "../../assets/img/diomond.svg";
import checbox from "../../assets/img/checbox.svg";
import setting from "../../assets/img/setting.svg";
import hour from "../../assets/img/hour.svg";
import scale1 from "../../assets/img/scale-bg.svg";
import scale2 from "../../assets/img/scale-bg2.svg";
import { useSelector } from "react-redux";
import BicycelsCard from "../Bicycels/BicycelsCard";
const Rating = () => {
  const { bicycles } = useSelector((s) => s.main);
  const rat = bicycles.filter((el) => el.rating >= 3);
  console.log(rat);

  return (
    <div>
      <div className="container">
        <div className="flex items-start justify-around mb-[80px]">
          <h1 className="text-[#101010] text-[64px] leading-[78.72px] tracking-[5%] font-[400]">
            Ничего не сможет <br /> остановить вас
          </h1>
          <div className="flex flex-col items-start justify-center gap-[32px] ">
            <p className="text-[#101010] leading-[25.6px] text-[16px] font-[400]">
              Наша компания специализируется на продаже товаров <br />{" "}
              для велосипедного спорта — велосипедов, запасных частей,
              <br /> аксессуаров и различного спортивного инвентаря <br />{" "}
              для активного спорта и отдыха.
            </p>
            <button className="text-[#B3B3B3] leading-[19.68px] font-[500] text-[16px]">
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div className="left-0 right-0 flex items-center justify-center">
        <img className="" src={menBic} alt="img" />
      </div>
      <div className="w-[100%] h-[206px]  bg-[#2E2E2E] flex items-center justify-center">
        <div className="container ">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-[16px] mt-[36px]">
              <div className="flex items-center gap-[16px]">
                <img src={dimond} alt="img" />
                <h1 className="font-[500] tracking-[1%] leading-[32px] text-[20px] text-[#FFFFFF]">
                  Европейские бренды
                </h1>
              </div>
              <h1 className="text-[#FFFFFF] leading-[25.6px] text-[16px] font-[300]">
                Представляем десятки <br />
                европейских брендов
              </h1>
            </div>{" "}
            <div className="flex flex-col gap-[16px] mt-[36px]">
              <div className="flex items-center gap-[16px]">
                <img src={checbox} alt="img" />
                <h1 className="font-[500] tracking-[1%] leading-[32px] text-[20px] text-[#FFFFFF]">
                  Вечная гарантия
                </h1>
              </div>
              <h1 className="text-[#FFFFFF] leading-[25.6px] text-[16px] font-[300]">
                На некоторые бренды <br /> предоставляем пожизненную <br />{" "}
                гарантию
              </h1>
            </div>{" "}
            <div className="flex flex-col gap-[16px] mt-[36px]">
              <div className="flex items-center gap-[16px]">
                <img src={setting} alt="img" />
                <h1 className="font-[500] tracking-[1%] leading-[32px] text-[20px] text-[#FFFFFF]">
                  Предпродажная настройка
                </h1>
              </div>
              <h1 className="text-[#FFFFFF] leading-[25.6px] text-[16px] font-[300]">
                Специалисты настроят ваш <br /> велосипед наилучшим <br />{" "}
                образом
              </h1>
            </div>{" "}
            <div className="flex flex-col gap-[16px] mt-[36px]">
              <div className="flex items-center gap-[16px]">
                <img src={hour} alt="img" />
                <h1 className="font-[500] tracking-[1%] leading-[32px] text-[20px] text-[#FFFFFF]">
                  Доставка за 24 часа
                </h1>
              </div>
              <h1 className="text-[#FFFFFF] leading-[25.6px] text-[16px] font-[300]">
                Доставляем товар всеми <br /> популярными транспортными <br />{" "}
                компаниями
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[771px] w-[full] bg-[#101010] relative flex justify-between">
        <h1 className="text-[#FFFFFF] tracking-[5%] leading-[78.72px] text-[64px] font-[500]  absolute left-[450px] top-[30px] z-[20]">
          Лучшие из <br /> лучших !
        </h1>
        <div
          className=" absolute top-[120px]"
          style={{
            background: `url(${scale1}) no-repeat center/cover`,
            height: "624px",
            width: "645px",
          }}
        ></div>
        <div className="flex items-center  overflow-x-scroll w-[1110px] gap-[30px] z-[40] absolute top-[120px]  right-[0]">
          {bicycles
            .filter((el) => el.rating >= 3)
            .map((el) => (
              <BicycelsCard el={el} />
            ))}
        </div>
        <div
          style={{
            background: `url(${scale2})no-repeat center/cover`,
          }}
          className="w-[506px] h-[100%] absolute right-[0] "
        ></div>
      </div>
    </div>
  );
};

export default Rating;
