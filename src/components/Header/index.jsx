import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import menu from "../../assets/img/menu.svg";
import wb from "../../assets/img/wb.svg";
import { HiViewGridAdd } from "react-icons/hi";
import { useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import kot from "../../assets/img/kot -vsopogah.jpg";
import SignIn from "../SignIn";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuth();
  console.log(user, "header");
  const navigate = useNavigate();
  const { favorite } = useSelector((s) => s.fav);
  const { basket } = useSelector((s) => s.basket);
  const [window, setWindow] = useState(false);
  const [EyeS, setEyeS] = useState(false);
  const [password, setPassword] = useState("");
  const [Create, setCreate] = useState(true);
  const [search, setSearch] = useState(false);
  const [register, setRegister] = useState(false);
  function KeyApp(e) {
    if (e.key === "Enter") {
      navigate("/create");
    } else {
      function ErrorMessages() {
        toast.error("Нажимай правильно! 🤦", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }
  function ErrorMessages() {
    toast.error("🤪 Бугага однако ты тупой 🤦", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  function ExitCreate() {
    if (password === "bomj") {
      navigate("/create");
      setPassword("");
      setCreate(false);
      setWindow(false);
    } else if (password.trim() === "") {
      ErrorMessages();
    } else {
      ErrorMessages();
    }
  }
  return (
    <>
      <div className=" z-[100]">
        <div className="h-[105px] bg-black flex items-center">
          <div className="container">
            <div
              style={{
                display: window ? "none" : "flex",
              }}
              className="flex items-center justify-between"
            >
              <NavLink onClick={() => setCreate(true)} to={"/"}>
                <img className="" src={wb} alt="img" />
              </NavLink>
              <div className="header text-white font-[200] text-[14px] uppercase flex gap-[50px]">
                <h1 className="text-orange-500">
                  {" "}
                  <NavLink onClick={() => setCreate(true)} to={"/"}>
                    Trade In
                  </NavLink>
                </h1>
                <h1 className="text-white-500 hover:text-orange-500">
                  {" "}
                  <NavLink onClick={() => setCreate(true)} to={"/bicycels"}>
                    Велосипеды
                  </NavLink>
                </h1>
                <h1
                  onClick={() => setCreate(true)}
                  className="text-white-500 hover:text-orange-500"
                >
                  <NavLink>Запчасти</NavLink>
                </h1>
                <h1
                  onClick={() => setCreate(true)}
                  className="text-white-500 hover:text-orange-500"
                >
                  <NavLink>Экипировка</NavLink>
                </h1>
                <h1 className="text-white-500 hover:text-orange-500">
                  <NavLink>Аксессуары</NavLink>
                </h1>
              </div>
              <div className="zoom  text-white flex ml-[100px] items-center gap-[30px] ">
                <NavLink
                  style={{
                    display: Create ? "block" : "none",
                  }}
                  onClick={() => {
                    setWindow(true), setCreate(false);
                  }}
                  className={`text-[30px] cursor-pointer text-white hover:text-gray-400`}
                >
                  <HiViewGridAdd />
                </NavLink>
                <a className=" flex flex-col">
                  <IoSearchOutline
                    onClick={() => setSearch(!search)}
                    className="text-[30px] cursor-pointer hover:text-gray-500"
                  />
                </a>

                <FaRegUser
                  onClick={() => {
                    setCreate(true);
                    setRegister(!register);
                  }}
                  className="text-[30px] cursor-pointer"
                />

                <div className=" relative">
                  {favorite.length ? (
                    <h1 className="w-[10px] h-[10px] bg-[#F57520] rounded-[50%] absolute right-[0] "></h1>
                  ) : null}
                  <NavLink
                    onClick={() => setCreate(true)}
                    className={`text-[30px] cursor-pointer`}
                    to={"/favorite"}
                  >
                    <FaRegHeart />
                  </NavLink>
                </div>
                <div className="relative">
                  {basket.length ? (
                    <h1 className="w-[10px] h-[10px] bg-[#F57520] rounded-[50%] absolute   right-0 "></h1>
                  ) : null}
                  <NavLink
                    onClick={() => setCreate(true)}
                    className={`text-[30px] cursor-pointer`}
                    to={"/basket"}
                  >
                    <IoCartOutline />
                  </NavLink>
                </div>

                <img
                  className="text-[30px] cursor-pointer ml-[20px]"
                  src={menu}
                  alt="img"
                />
                <div class="flex items-center justify-center gap-2 w-[200px] ">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full cursor-pointer"
                      src={user?.photoURL}
                      alt="Bonnie image"
                    />
                  </div>
                  <div class="flex-1 justify-center">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {user?.displayName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: window ? "block" : "none",
                background: `url(${kot})no-repeat center/cover`,
              }}
              className="w-[100%] h-[220%]  absolute z-[70] right-0 left-0 backdrop-blur-[10px] flex items-center justify-center "
            >
              <div className="w-[600px] h-[500px] bg-[#0000002b] absolute z-[90] rounded-[15px] backdrop-blur-[7px] flex flex-col justify-center items-center  gap-[40px] mt-[10%] right-[36%]">
                <a
                  onClick={() => {
                    setWindow(false), setCreate(true);
                  }}
                  className="text-white text-[35px] cursor-pointer absolute top-2 right-2"
                >
                  <IoCloseSharp />
                </a>
                <div className="relative">
                  <a
                    style={{
                      display: EyeS ? "none" : "flex",
                    }}
                    onClick={() => setEyeS(true)}
                    className="text-white text-[30px] cursor-pointer absolute right-[0] bottom-[10px]"
                  >
                    <IoEyeSharp />
                  </a>
                  <a
                    style={{
                      display: EyeS ? "flex" : "none",
                    }}
                    onClick={() => setEyeS(!EyeS)}
                    className="text-white text-[30px] cursor-pointer absolute right-[0] bottom-[10px]"
                  >
                    <FaEyeSlash />
                  </a>
                  <input
                    value={password}
                    placeholder=" Пожалуйста введите пароль !..."
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-white mt-[10%]  flex items-center justify-center bg-transparent border-b-[2px] border-t-none text-[20px] outline-none p-[15px] border-solid w-[380px]"
                    type={EyeS ? `text` : "password"}
                  />
                </div>
                <button
                  onClick={() => ExitCreate()}
                  className="text-white bg-orange-500 w-[300px] text-[20px] font-sans font-[500] flex items-center justify-center p-2 rounded-[9px] mb-[100px]"
                >
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <input
        style={{
          display: search ? "flex" : "none",
        }}
        className="bg-[#101010] fon-[400] h-[44px] w-[259px] text-[15px] outline-none  border-[2px] p-[10px] absolute placeholder:text-[#777777] placeholder:text-[14px]  right-[350px] top-0 rounded-[5px] border-[#4C4C4C] text-white   mt-[90px]"
        type="text"
        placeholder="  Поиск"
      />
      <div
        style={{
          display: register ? "flex" : "none",
        }}
        onClick={() => setRegister(!register)}
        className="bg-[#00000094] w-[100%] h-[600vh] absolute top-0 right-0 left-0 bottom-0 z-[20]"
      ></div>
      <div
        style={{
          display: register ? "flex" : "none",
        }}
        className=""
      >
        <SignIn />
      </div>
    </>
  );
};

export default Header;
