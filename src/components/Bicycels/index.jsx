import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BicycelsCard from "./BicycelsCard";
import bicycle from "../../assets/img/gornye.png";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import {
  GetBicyles,
  SortBicyclesEnd,
  SortBicyclesOne,
  filterBicycles,
} from "../../redux/reducers/SliceCreate";
import axios from "axios";

const Bicycels = () => {
  const [price, setPrice] = useState(false);

  const dispatch = useDispatch();
  const [category, setCategory] = useState(false);
  const [material, setMaterial] = useState(false);
  const { bicycles } = useSelector((s) => s.main);
  const [brand, setBrand] = useState(false);
  const [selectedCategories, setSelectedCategory] = useState("");
  async function AddtoBicycles() {
    let res = await axios.get(
      `https://api.elchocrud.pro/api/v1/c6babcd9cc1c8f617aa8669488549f1c/bike`
    );
    const { data } = res;
    dispatch(GetBicyles(data));
  }

  const handleCheckboxChange = (e) => {
    setSelectedCategory(e.target.value);
    dispatch(filterBicycles(selectedCategories));
  };

  const hindleSortChange = (e) => {
    if (e.target.value === "Сортировка от последнего") {
      dispatch(SortBicyclesEnd());
    } else if (e.target.value === "Сортировка от первого") {
      dispatch(SortBicyclesOne());
    }
  };

  useEffect(() => {
    AddtoBicycles();
    hindleSortChange;
  }, [selectedCategories, dispatch]);
  return (
    <div>
      <div
        className="h-[300px] relative"
        style={{
          background: `url(${bicycle}) no-repeat center/cover`,
        }}
      ></div>
      <div className="container">
        <h1 className="text-white absolute top-[25%] ml-[20px] font-[400] text-[64px] tracking-[5%] leading-[78.72px]">
          Горные велосипеды
        </h1>
        <div className="mt-[100px] flex items-start justify-between">
          <div className=" w-[20%] flex flex-col items-start justify-between ">
            <p className="font-[500] text-[18px] leading-[28.8px] tracking-[1%]  flex  items-start gap-[10px]  justify-between ">
              Только в наличии{" "}
              <label class="inline-flex items-center mb-5 cursor-pointer mt-[2px]">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F57520] dark:peer-focus:ring-[#F57520] rounded-full peer dark:bg-[#F57520] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-[#F57520] peer-checked:bg-[#F57520]"></div>
              </label>
            </p>
            <div className="flex flex-col  justify-center gap-[10px] border-t-[1px] border-[#E5E5E5]">
              <h1
                onClick={() => setCategory(!category)}
                className="flex items-center mt-[10px] justify-between"
              >
                Категории товара
                <a
                  style={{
                    display: category ? "flex" : "none",
                  }}
                  className=" ml-[20px] cursor-pointer"
                >
                  <GoChevronUp />
                </a>
                <a
                  style={{
                    display: category ? "none" : "flex",
                  }}
                  className="ml-[20px] cursor-pointer"
                >
                  <GoChevronDown />
                </a>
              </h1>
              <div
                style={{
                  display: category ? "flex" : "none",
                }}
                className="flex flex-col gap-[20px] items-start "
              >
                <a className="flex items-center gap-3">
                  <input
                    checked={selectedCategories === "велосипеды для триатлона"}
                    onChange={handleCheckboxChange}
                    id="link-checkbox"
                    type="checkbox"
                    value="велосипеды для триатлона"
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[300] text-[#777777] leading-[25.6px]">
                    Велосипеды для триатлона
                  </h1>
                </a>
                <a className="flex items-center gap-3">
                  <input
                    checked={
                      selectedCategories === "горные велосипеды"
                    }
                    onChange={handleCheckboxChange}
                    id="link-checkbox"
                    type="checkbox"
                    value="горные велосипеды"
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[300] text-[#777777] leading-[25.6px]">
                    Горные велосипеды
                  </h1>
                </a>
                <a className="flex items-center gap-3">
                  <input
                    checked={selectedCategories === "городские велосипеды"}
                    onChange={handleCheckboxChange}
                    id="link-checkbox"
                    type="checkbox"
                    value="городские велосипеды"
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[300] text-[#777777] leading-[25.6px]">
                    Городские велосипеды
                  </h1>
                </a>
                <a className="flex items-center gap-3">
                  <input
                    checked={selectedCategories === "гравийные велосипеды"}
                    onChange={handleCheckboxChange}
                    id="link-checkbox"
                    type="checkbox"
                    value="гравийные велосипеды"
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[300] text-[#777777] leading-[25.6px]">
                    Гравийные велосипеды
                  </h1>
                </a>
                <a className="flex items-center gap-3">
                  <input
                    checked={selectedCategories === "двухподвесные велосипеды"}
                    onChange={handleCheckboxChange}
                    id="link-checkbox"
                    type="checkbox"
                    value="двухподвесные велосипеды"
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[300] text-[#777777] leading-[25.6px]">
                    Двухподвесные велосипеды
                  </h1>
                </a>
                <h3 className="text-[#777777] text-[14px] font-[400] leading-[19.2px] cursor-pointer">
                  Показать ещё
                </h3>
              </div>
            </div>
            <select
              onChange={hindleSortChange}
              className="  top-[25px] left-[460px] absolute mt-[30%] w-[350px] h-[60px]  rounded-[10px] outline-none border-solid border-[2px] border-[#E5E5E5] text-[#777777] bg-transparent p-[10px]"
            >
              <option value="Сортировка от первого">
                Сортировка от первого
              </option>
              <option value="Сортировка от последнего">
                Сортировка от последнего
              </option>
            </select>
            <div className="mt-[20px]  border-t-[1px] border-[#777777] flex flex-col justify-center w-[250px]">
              <h1 className="flex items-center mt-[10px]  justify-between tracking-[1%] leading-[28.8px] text-[18px] font-[500]">
                Цена
                <a
                  style={{
                    display: price ? "flex" : "none",
                  }}
                  onClick={() => setPrice(false)}
                  className="  cursor-pointer"
                >
                  <GoChevronUp />
                </a>
                <a
                  style={{
                    display: price ? "none" : "flex",
                  }}
                  onClick={() => setPrice(true)}
                  className=" cursor-pointer"
                >
                  <GoChevronDown />
                </a>
              </h1>
              <div
                style={{
                  display: price ? "flex" : "none",
                }}
                className="flex flex-col gap-[25px] w-full"
              >
                <div className="w-full flex items-center relative flex-col">
                  <div className="range w-[16px] h-[16px] rounded-[50%] bg-blue-600 flex  items-center justify-center absolute bottom-[-2px] left-0 cursor-pointer"></div>

                  <input
                    id="disabled-range"
                    type="range"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-[20px]"
                  />
                </div>
                <div className="flex items-center justify-between gap-[10px]">
                  <button className="bg-[#E5E5E5] border-[1px] border-solid border-[#777777] w-[109px] h-[46px] rounded-[10px]">
                    P
                  </button>
                  <button className="text-[#000000] font-[400] text-[16px] leading-[25.6px]">
                    -
                  </button>
                  <button className="bg-[#E5E5E5] border-[1px] border-solid border-[#777777] w-[109px] h-[46px] rounded-[10px]">
                    P
                  </button>
                  <hr />
                </div>
              </div>
            </div>
            <div className="mt-[40px] w-[250px]  border-t-[1px] border-[#777777] flex flex-col  justify-center gap-[10px]">
              <h1 className=" flex items-center justify-between mt-[10px] font-[500] text-[18px] leading-[28.8px] tracking-[1%]  ">
                Бренд
                <a
                  style={{
                    display: brand ? "none" : "flex",
                  }}
                  onClick={() => setBrand(true)}
                  className="cursor-pointer"
                >
                  <GoChevronUp />
                </a>
                <a
                  style={{
                    display: brand ? "flex" : "none",
                  }}
                  onClick={() => setBrand(false)}
                  className="cursor-pointer"
                >
                  <GoChevronDown />
                </a>
              </h1>
              <div
                style={{
                  display: brand ? "none" : "flex",
                }}
                className="flex flex-col items-start justify-center gap-[10px]"
              >
                <a className="flex items-center gap-3 mt-[14px]">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px] ">
                    Bianci
                  </h1>
                </a>{" "}
                <a className="flex items-center gap-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px]">
                    BMC
                  </h1>
                </a>{" "}
                <a className="flex items-center gap-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px]">
                    Ciclistino
                  </h1>
                </a>{" "}
                <a className="flex items-center gap-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px]">
                    Cipollini
                  </h1>
                </a>
                <a className="flex items-center gap-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px]">
                    Colnago
                  </h1>
                </a>
                <h3 className="text-[#777777] text-[14px] font-[400] leading-[19.2px] cursor-pointer mt-[10px]">
                  Показать ещё
                </h3>
              </div>
            </div>
            <div className="mt-[40px] w-[250px]  border-t-[1px] border-[#777777] flex flex-col  justify-center gap-[10px] ">
              <h1 className=" flex items-center justify-between mt-[10px] font-[500] text-[18px] leading-[28.8px] tracking-[1%]  ">
                Материал рамы
                <a
                  style={{
                    display: material ? "flex" : "none",
                  }}
                  onClick={() => setMaterial(false)}
                  className="cursor-pointer"
                >
                  <GoChevronUp />
                </a>
                <a
                  onClick={() => setMaterial(true)}
                  style={{
                    display: material ? "none" : "flex",
                  }}
                  className="cursor-pointer"
                >
                  <GoChevronDown />
                </a>
              </h1>
              <div
                style={{
                  display: material ? "flex" : "none",
                }}
                className="flex flex-col items-start justify-center gap-[10px]"
              >
                <a className="flex items-center gap-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px]">
                    Алюминий
                  </h1>
                </a>
                <a className="flex items-center gap-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px]">
                    Карбон
                  </h1>
                </a>{" "}
                <a className="flex items-center gap-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-[#F57520] bg-[#F57520] border-[#F57520] rounded focus:ring-[#F57520] dark:focus:ring-[#F57520] dark:ring-[#F57520] focus:ring-2 dark:bg-[#F57520] dark:border-[#F57520]"
                  />

                  <h1 className="text-[16px] font-[400] text-[#242424] leading-[25.6px]">
                    Сталь
                  </h1>
                </a>
              </div>
            </div>
            <button className="text-[16px] font-[500] leading-[19.68px] text-[] mt-[40px] border-[1px] border-[#E5E5E5] w-[250px] flex items-center justify-center py-[16px] rounded-[10px]">
              Сбросить фильтры
            </button>
          </div>
          <div className="flex w-[75%]">
            <div className=" flex  gap-[20px] items-start flex-wrap">
              {bicycles.map((el) => (
                <>
                  <BicycelsCard key={el.id} el={el} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bicycels;
