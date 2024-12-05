import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BicylesCreate } from "../../redux/reducers/SliceCreate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bicyceles from "../../assets/img/bicycles.jpeg";
const BicycelsCreate = () => {
  const dispatch = useDispatch();
  const [bicyclesUrl, setBicyclesUrl] = useState("");
  const [bicyclesName, setBicyclesName] = useState("");
  const [bicyclesPrice, setBicyclesPrice] = useState("");
  const [bicyclesDes, setBicyclesDes] = useState("");
  const [bicyclesCategory, setBicyclesCategory] = useState("");
  const [bicyclesBrand, setBicyclesBrand] = useState("");
  const [bicyclesMaterial, setBicyclesMaterial] = useState("");
  const [strana, setStrana] = useState("");
  const [s, setS] = useState("");
  const [mL, setML] = useState("");
  const [m, setM] = useState("");
  const [l, setL] = useState("");
  const [xl, setXL] = useState("");
  function ErrorMessages() {
    toast.error("🤦 Заполните пустые  ячейки !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  function CreateProduct() {
    if (
      bicyclesBrand.trim() === "" ||
      bicyclesName.trim() === "" ||
      bicyclesPrice.trim() === "" ||
      bicyclesCategory.trim() === "" ||
      bicyclesDes.trim() === "" ||
      bicyclesMaterial.trim() === "" ||
      bicyclesUrl.trim() === "" ||
      strana.trim() === "" ||
      mL.trim() === "" ||
      xl.trim() === "" ||
      s.trim() === "" ||
      l.trim() === "" ||
      m.trim() === ""
    ) {
      ErrorMessages();
    } else {
      let newBicycles = {
        name: bicyclesName,
        price: bicyclesPrice,
        url: bicyclesUrl,
        description: bicyclesDes,
        category: bicyclesCategory,
        brand: bicyclesBrand,
        material: bicyclesMaterial,
        rating: Math.round(Math.random() * 5),
        size: Math.floor(Math.random() * 4),
        date: new Date().toLocaleString(),
        quantity: 1,
        strana: strana,
        s: s,
        ml: mL,
        xl: xl,
        l: l,
        m: m,
      };
      axios.post(
        `https://api.elchocrud.pro/api/v1/c6babcd9cc1c8f617aa8669488549f1c/bike`,
        newBicycles
      );
      dispatch(BicylesCreate(newBicycles));
      setBicyclesUrl("");
      setBicyclesName("");
      setBicyclesPrice("");
      setBicyclesBrand(""), setBicyclesCategory("");
      setBicyclesDes("");
      setBicyclesMaterial("");
      setStrana("");
      setL("");
      setM("");
      setML("");
      setXL("");
      setS("");
    }
  }
  return (
    <div
      style={{
        background: `url(${bicyceles})no-repeat center/cover`,
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
      }}
      className="flex items-center justify-center mt-[6%]"
    >
      <div className="flex flex-col items-center justify-center gap-[10px] w-[600px] bg-transparent  h-[750px] rounded-[20px] ">
        <div className="flex justify-center gap-[20px] mt-[20px]">
          <div className="flex flex-col items-start gap-[20px] ">
            <input
              value={bicyclesUrl}
              onChange={(e) => setBicyclesUrl(e.target.value)}
              className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-full bg-transparent placeholder:text-white "
              type="text"
              placeholder="URL..."
            />

            <input
              value={bicyclesName}
              onChange={(e) => setBicyclesName(e.target.value)}
              className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-full bg-transparent placeholder:text-white "
              type="text"
              placeholder="Name"
            />

            <div className="flex items-center gap-[50px] justify-start">
              <input
                value={bicyclesPrice}
                onChange={(e) => setBicyclesPrice(e.target.value)}
                className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-[200px] bg-transparent placeholder:text-white "
                type="number"
                placeholder="Price        $"
              />
            </div>
            <div className="flex items-center gap-5">
              {" "}
              <input
                value={s}
                onChange={(e) => setS(e.target.value)}
                className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-[90px] bg-transparent placeholder:text-white "
                type="number"
                placeholder=" S"
              />
              <input
                value={mL}
                onChange={(e) => setML(e.target.value)}
                className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-[90px] bg-transparent placeholder:text-white "
                type="number"
                placeholder=" M-L"
              />
              <ToastContainer />
              <input
                value={m}
                onChange={(e) => setM(e.target.value)}
                className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-[90px] bg-transparent placeholder:text-white "
                type="number"
                placeholder=" M"
              />
              <input
                value={l}
                onChange={(e) => setL(e.target.value)}
                className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-[90px] bg-transparent placeholder:text-white "
                type="number"
                placeholder=" L"
              />
              <input
                value={xl}
                onChange={(e) => setXL(e.target.value)}
                className="border-solid border-[1.5px] border-orange-500 text-orange-500 outline-none p-[10px] rounded-[10px] w-[90px] bg-transparent placeholder:text-white "
                type="number"
                placeholder=" X-L"
              />
            </div>

            <textarea
              value={bicyclesDes}
              onChange={(e) => setBicyclesDes(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              className="p-4 font-[200] text-white placholder:text-red-500 border-[1px]  border-solid border-orange-500 bg-transparent outline-none placeholder:text-white "
            ></textarea>
          </div>
          <div className="flex flex-col items-start gap-[20px]">
            <select
              value={bicyclesCategory}
              onChange={(e) => setBicyclesCategory(e.target.value)}
              className="bg-transparent border-solid border-[1.4px] outline-none border-orange-500 p-2 rounded-[6px] w-[200px] font-[100px] text-white "
            >
              <option value="">Категории</option>
              <option value="Велосипеды для триатлона">
                Велосипеды для триатлона
              </option>
              <option value="горные велосипеды">Горные велосипеды</option>
              <option value="городские велосипеды">Городские велосипеды</option>
              <option value="гравийные велосипеды">Гравийные велосипеды</option>
              <option value="двухподвесные велосипеды">
                Двухподвесные велосипеды
              </option>
            </select>
            <select
              value={bicyclesBrand}
              onChange={(e) => setBicyclesBrand(e.target.value)}
              className=" w-[200px] font-[100px] bg-transparent border-solid border-[1.4px] outline-none border-orange-500 p-2 rounded-[6px] text-white  "
            >
              <option value="">Бренд</option>
              <option value="bianci">Bianci</option>
              <option value="bmc">BMC </option>
              <option value="ciclistino">Ciclistino </option>
              <option value="cipollini">Cipollini </option>
              <option value="colnago">Colnago </option>
            </select>
            <select
              value={bicyclesMaterial}
              onChange={(e) => setBicyclesMaterial(e.target.value)}
              className=" w-[200px] font-[100px] bg-transparent border-solid border-[1.4px] outline-none border-orange-500 p-2 rounded-[6px] text-white "
            >
              <option value="">Материал рамы</option>
              <option value="алюминий">Алюминий</option>
              <option value="карбон">Карбон</option>
              <option value="сталь ">Сталь </option>
            </select>
            <select
              value={strana}
              onChange={(e) => setStrana(e.target.value)}
              className="w-[200px] font-[100px] bg-transparent border-solid border-[1.4px] outline-none border-orange-500 p-2 rounded-[6px] text-white "
            >
              <option value="">Страна</option>
              <option value="швейцария">Швейцария</option>
              <option value="америка">Америка</option>
              <option value="испания">Испания </option>
              <option value="франция">Франция </option>
              <option value="италия">Италия </option>
            </select>
          </div>
        </div>

        <button
          onClick={() => CreateProduct()}
          className="text-white border-[1px]  bg-orange-500 p-2 w-[200px] rounded-[10px] uppercase font-[100]text-30px flex items-center justify-center mt-[60px] mb-[50px] border-none "
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default BicycelsCreate;
